<template>
  <div class="relative aspect-[800/451] max-h-screen w-full">
    <NuxtImg
      preload
      provider="cloudimage"
      src="/ferryterminal.jpg"
      alt="室蘭フェリーターミナル"
      class="h-full w-full object-cover"
    />
    <div class="absolute right-0 top-0 px-4 py-2 text-sm text-gray-200">
      フェリーターミナルの写真（<NuxtLink
        href="http://creativecommons.org/licenses/by/4.0/"
        rel="noopener noreferrer"
        target="_blank"
        >CC-by</NuxtLink
      >
      室蘭市）
    </div>
    <slot></slot>
  </div>
</template>
