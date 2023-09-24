<template>
  <div
    class="relative aspect-[800/451] max-h-screen w-full bg-[url('/ferryterminal.jpg')] bg-cover bg-center bg-no-repeat"
  >
    <div class="absolute right-0 top-0 px-4 py-2 text-sm text-gray-200">
      フェリーターミナルの写真（<a
        href="http://creativecommons.org/licenses/by/4.0/"
        rel="noopener noreferrer"
        target="_blank"
        >CC-by</a
      >
      室蘭市）
    </div>
    <slot></slot>
  </div>
</template>
