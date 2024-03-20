<template>
  <div
    class="relative grid grid-cols-1 gap-4 overflow-y-hidden sm:grid-cols-3"
    :class="{
      'max-h-80': isOmitted,
    }"
  >
    <div
      v-for="month in months"
      :key="month.format('YYYY-MM')"
      class="bg-gray-100 p-4"
    >
      <h5 class="text-center text-base font-semibold leading-6">
        {{ month.format('YYYY年MM月') }}
      </h5>
      <PriceClassMonthCalendar
        :price-schedules="priceSchedules"
        :month="month"
        :start-date="startDate"
        :end-date="endDate"
        :color="color"
        :holidays="holidays"
      />
    </div>
    <ClientOnly>
      <div v-if="isOmitted" class="absolute inset-x-0 bottom-0 z-10">
        <button
          type="button"
          class="mt-4 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          @click="isOmitted = !isOmitted"
        >
          {{ isOmitted ? 'もっと見る' : '閉じる' }}
        </button>
      </div>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { cdate } from 'cdate';

import { holidaySchema } from '~/schemas/holiday_schema';

import type { PriceSchedule } from '~/schemas/price_schedule_schema';

interface Props {
  priceSchedules: PriceSchedule[];
  startDate: cdate.CDate;
  endDate: cdate.CDate;
  color: {
    [key: string]: string;
  };
}

const props = withDefaults(defineProps<Props>(), {});

const config = useRuntimeConfig();

// refs
/**
 * 休日
 */
const holidays = ref([] as cdate.CDate[]);

/**
 * 省略表示するかどうか
 */
const isOmitted = ref(true);

// fetch
try {
  const { data } = await useLazyFetch(config.public.HOLIDAY_API_URL);
  holidays.value = holidaySchema
    .array()
    .parse(data.value)
    .map((holiday) => {
      return cdate(holiday.date);
    });
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
}

// computed
/**
 * 開始月
 */
const startMonth = computed(() => {
  return props.startDate.startOf('month');
});

/**
 * 終了月
 */
const endMonth = computed(() => {
  return props.endDate.endOf('month');
});

/**
 * 月の配列
 */
const months = computed(() => {
  const months = [] as cdate.CDate[];
  let date = startMonth.value;
  while (date <= endMonth.value) {
    months.push(date);
    date = date.next('month');
  }
  return months;
});
</script>
