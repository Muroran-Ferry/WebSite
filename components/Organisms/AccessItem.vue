<template>
  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
    <dt class="text-sm font-medium text-gray-700 sm:pl-8">
      <slot name="title"></slot>
    </dt>
    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
      <slot name="default"></slot>
    </dd>
  </div>
</template>
