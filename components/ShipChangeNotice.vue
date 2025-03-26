<template>
  <div class="text-xs">※{{ period }}は{{ shipName }}に変更します。</div>
</template>

<script lang="ts" setup>
defineProps<{
  period: string;
  shipName: string;
}>();
</script>
