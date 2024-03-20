<template>
  <section class="mx-auto max-w-7xl p-6 lg:px-8">
    <header class="mb-8">
      <h3
        :id="id"
        class="mx-auto w-fit border-b-4 border-sky-200 px-4 pb-1 text-xl font-semibold leading-6 text-white"
      >
        <slot name="header"></slot>
      </h3>
    </header>
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
interface Props {
  id?: string;
}

withDefaults(defineProps<Props>(), {
  id: undefined,
});
</script>
