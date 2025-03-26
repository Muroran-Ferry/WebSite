<template>
  <section>
    <header :class="headerClass" class="px-4 py-2">
      <h4 class="m-0 text-base font-semibold leading-6 text-white">
        {{ routeName }}
      </h4>
      <div
        v-if="$slots['header-description']"
        class="flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6"
      >
        <slot name="header-description" />
      </div>
    </header>

    <div v-if="$slots.default" class="space-y-8 py-4">
      <slot />
    </div>

    <div v-if="$slots.note" class="py-4">
      <slot name="note" />
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  headerClass?: string;
  routeName: string;
}>();
</script>
