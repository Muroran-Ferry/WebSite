<template>
  <div role="list">
    <PriceClassScheduleItem
      v-for="(priceSchedule, i) in priceSchedules"
      :key="i"
      :price-schedule="priceSchedule"
      role="listitem"
    />
  </div>
</template>

<script lang="ts" setup>
import type { PriceSchedule } from '~/schemas/price_schedule_schema';

interface Props {
  priceSchedules: PriceSchedule[];
}

withDefaults(defineProps<Props>(), {});
</script>
