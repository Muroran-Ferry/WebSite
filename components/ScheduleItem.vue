<template>
  <div
    class="grid grid-cols-3 sm:flex sm:flex-col"
    :class="{ 'sm:text-center': centered }"
  >
    <div class="text-base font-medium text-gray-900 sm:text-lg">
      {{ label }}
    </div>
    <div class="col-span-2 text-sm text-gray-700 sm:text-base">
      <slot>{{ value }}</slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    label: string;
    value?: string | number;
    centered?: boolean;
  }>(),
  {
    value: '',
    centered: false,
  }
);
</script>
