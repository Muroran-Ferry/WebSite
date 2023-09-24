<template>
  <div class="not-prose">
    <div
      v-for="({ label, schedules, headerBg, bg }, i) in [
        {
          label: 'A期間',
          schedules: classA,
          headerBg: 'bg-orange-300',
          bg: 'bg-orange-100',
        },
        {
          label: 'B期間',
          schedules: classB,
          headerBg: 'bg-sky-300',
          bg: 'bg-sky-200',
        },
        {
          label: 'C期間',
          schedules: classC,
          headerBg: 'bg-lime-300',
          bg: 'bg-lime-100',
        },
      ]"
      :key="i"
      class="rounded-md"
      :class="bg"
    >
      <h5
        class="rounded-t-md py-2 text-center text-base font-semibold leading-6 text-gray-900 sm:text-sm"
        :class="headerBg"
      >
        {{ label }}
      </h5>
      <div class="px-4 py-2">
        <ul
          class="space-y-1 text-base text-gray-900 sm:mx-auto sm:w-fit sm:text-sm"
          role="list"
        >
          <PriceClassScheduleItem
            v-for="(priceSchedule, j) in schedules"
            :key="`${i}-${j}`"
            :price-schedule="priceSchedule"
            role="listitem"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PriceSchedule } from '~/schemas/price_schedule_schema';

interface Props {
  priceSchedules: PriceSchedule[];
}

const props = withDefaults(defineProps<Props>(), {});

const classA = computed(() => {
  return props.priceSchedules.filter((priceSchedule) => {
    return priceSchedule.priceClass === 'A';
  });
});

const classB = computed(() => {
  return props.priceSchedules.filter((priceSchedule) => {
    return priceSchedule.priceClass === 'B';
  });
});

const classC = computed(() => {
  return props.priceSchedules.filter((priceSchedule) => {
    return priceSchedule.priceClass === 'C';
  });
});
</script>

<style></style>
