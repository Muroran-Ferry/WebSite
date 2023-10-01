<template>
  <li
    v-if="priceSchedule.startDate.getTime() === priceSchedule.endDate.getTime()"
  >
    {{ startDateText }}
  </li>
  <li v-else>{{ startDateText }}〜{{ endDateText }}</li>
</template>

<script lang="ts" setup>
import { cdate } from 'cdate';

import type { PriceSchedule } from '~/schemas/price_schedule_schema';

interface Props {
  priceSchedule: PriceSchedule;
}

const props = withDefaults(defineProps<Props>(), {});

// 年を跨ぐかどうか
const isCrossYear = computed(() => {
  return (
    props.priceSchedule.startDate.getFullYear() !==
    props.priceSchedule.endDate.getFullYear()
  );
});

const startDateText = computed(() => {
  return cdate(props.priceSchedule.startDate).format('YYYY年M月D日');
});

const endDateText = computed(() => {
  if (isCrossYear.value) {
    return cdate(props.priceSchedule.endDate).format('YYYY年M月D日');
  } else {
    return cdate(props.priceSchedule.endDate).format('M月D日');
  }
});
</script>

<style></style>
