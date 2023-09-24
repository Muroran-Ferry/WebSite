<template>
  <div role="list">
    <PriceClassScheduleItem
      v-for="(priceSchedule, i) in priceSchedules"
      :key="i"
      :priceSchedule="priceSchedule"
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

<style></style>
