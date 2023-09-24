<template>
  <div class="not-prose">
    <table class="mt-2 w-full">
      <thead class="border-b border-gray-300">
        <tr>
          <th class="text-center text-red-600">日</th>
          <th class="text-center">月</th>
          <th class="text-center">火</th>
          <th class="text-center">水</th>
          <th class="text-center">木</th>
          <th class="text-center">金</th>
          <th class="text-center text-blue-600">土</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(week, i) in weeks"
          :key="i"
          :class="{
            'border-b border-gray-300': i !== weeks.length - 1,
          }"
        >
          <td
            v-for="(date, j) in week"
            :key="`${i}-${j}`"
            class="py-1 text-center"
            :class="(date && getColor(date)) ?? ''"
          >
            <span
              v-if="date"
              :class="{
                'text-red-700':
                  holidays
                    .map((d) => d.toDate().toDateString())
                    .includes(date.toDate().toDateString()) ||
                  date.toDate().getDay() === 0,
                'text-blue-700': date.toDate().getDay() === 6,
                'rounded-sm ring-4 ring-white/80 ring-offset-2':
                  date.toDate().toDateString() ===
                  today.toDate().toDateString(),
              }"
            >
              {{ date.format('D') }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { cdate } from 'cdate';

import type { PriceSchedule } from '~/schemas/price_schedule_schema';

interface Props {
  priceSchedules: PriceSchedule[];
  startDate: cdate.CDate;
  endDate: cdate.CDate;
  month: cdate.CDate;
  color: {
    [key: string]: string;
  };
  holidays: cdate.CDate[];
}

const props = withDefaults(defineProps<Props>(), {});

const calendar = computed(() => {
  const calendar = [] as cdate.CDate[];
  let date = props.month.startOf('month');
  while (date <= props.month.endOf('month')) {
    calendar.push(date);
    date = date.next('day');
  }
  return calendar;
});

const weeks = computed(() => {
  const weeks = [] as (cdate.CDate | undefined)[][];
  let week = [] as (cdate.CDate | undefined)[];
  calendar.value.forEach((date) => {
    week[date.toDate().getDay()] = date;
    if (date.toDate().getDay() === 6) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length > 0) {
    if (week.length < 7) {
      for (let i = week.length; i < 7; i++) {
        week[i] = undefined;
      }
    }
    weeks.push(week);
  }
  return weeks;
});

const today = computed(() => {
  return cdate();
});

const findPriceClass = (date: cdate.CDate) => {
  if (props.startDate.toDate().getDate() > date.toDate().getDate()) {
    console.log('startDate');
    return undefined;
  }
  if (props.endDate.toDate().getDate() < date.toDate().getDate()) {
    console.log('endDate');
    return undefined;
  }
  const priceSchedule = props.priceSchedules.find((priceSchedule) => {
    return (
      cdate(priceSchedule.startDate).startOf('day') <= date &&
      date <= cdate(priceSchedule.endDate).endOf('day')
    );
  });

  if (!priceSchedule) {
    return undefined;
  }
  return priceSchedule.priceClass;
};

const getColor = (date: cdate.CDate) => {
  const priceClass = findPriceClass(date);
  if (!priceClass) {
    return undefined;
  }
  return props.color[priceClass];
};
</script>

<style></style>
