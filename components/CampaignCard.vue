<template>
  <div
    class="relative flex flex-col items-center gap-4 rounded-md p-4 shadow sm:flex-row"
  >
    <NuxtImg
      provider="cloudimage"
      :src="imgSrc"
      :alt="title"
      class="h-24 object-contain sm:w-[12%] sm:max-w-[90px]"
      loading="lazy"
    />
    <div>
      <header>
        <h3 class="text-xl font-semibold">{{ title }}</h3>
        <ul v-if="meta">
          <li v-for="(m, i) in meta" :key="i" class="text-sm">#{{ m }}</li>
        </ul>
      </header>
      <p class="mt-2 text-sm">{{ description }}</p>
      <a
        :href="href"
        class="text-sm text-blue-600 underline decoration-blue-600 hover:text-blue-900 hover:decoration-blue-900"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="absolute inset-x-0 -top-px bottom-0"></span>
        詳しくはこちら
        <ArrowTopRightOnSquareIcon
          class="-mt-1 inline size-4"
          aria-hidden="true"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';

interface Props {
  imgSrc: string;
  title: string;
  description: string;
  meta?: string[];
  href: string;
}

withDefaults(defineProps<Props>(), {
  meta: () => [],
});
</script>
