<template>
  <div class="mx-auto -mt-8 hidden max-w-7xl px-16 sm:block xl:px-24">
    <nav
      class="flex flex-wrap gap-x-4 border-t-4 border-t-sky-600 bg-white py-7"
      v-bind="$attrs"
    >
      <a
        v-for="item in navigation"
        :key="item.name"
        :href="item.href"
        class="group flex flex-1 flex-col justify-center text-sm font-light leading-6 text-gray-500 hover:text-gray-900"
      >
        <div
          class="mx-auto w-fit border-b-4 border-b-transparent group-hover:border-b-sky-500"
        >
          {{ item.name }}
        </div>
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
const navigation = [
  { name: '航路・時刻', href: '/#schedule' },
  { name: '施設情報', href: '/#facility' },
  { name: 'アクセス', href: '/#access' },
  { name: '予約案内', href: '/#reserve' },
  { name: '乗船案内', href: '/#embarkation' },
  { name: '運賃・料金', href: '/#price' },
];
</script>
