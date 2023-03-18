<template>
  <div>
    <SiteHeader
      class="supports-backdrop-blur:bg-white/60 sticky top-0 z-20 w-full flex-none border-b border-slate-900/10 bg-white/95 backdrop-blur transition-colors duration-500"
    />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appConfig.title}` : appConfig.title;
  },
});
</script>
