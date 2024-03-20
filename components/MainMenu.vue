<template>
  <div class="mx-auto -mt-8 hidden max-w-7xl px-16 sm:block xl:px-24">
    <nav
      class="flex max-h-[160px] flex-nowrap gap-x-4 border-t-4 border-t-sky-600 bg-white py-7"
      v-bind="$attrs"
    >
      <a
        v-for="item in navigation"
        :key="item.name"
        :href="item.href"
        class="group flex flex-1 flex-col justify-center text-sm font-light leading-6 text-gray-500 hover:text-gray-900"
      >
        <component
          :is="item.icon"
          v-if="item.icon"
          class="w-full px-4 py-2"
        ></component>
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
import AccessIcon from '~/components/MenuIcons/AccessIcon.vue';
import EmbarkationIcon from '~/components/MenuIcons/EmbarkationIcon.vue';
import FacilityIcon from '~/components/MenuIcons/FacilityIcon.vue';
import PriceIcon from '~/components/MenuIcons/PriceIcon.vue';
import ReserveIcon from '~/components/MenuIcons/ReserveIcon.vue';
import ScheduleIcon from '~/components/MenuIcons/ScheduleIcon.vue';

const navigation = [
  { name: '航路・時刻', href: '/#schedule', icon: ScheduleIcon },
  { name: '施設情報', href: '/#facility', icon: FacilityIcon },
  { name: 'アクセス', href: '/#access', icon: AccessIcon },
  { name: '予約案内', href: '/#reserve', icon: ReserveIcon },
  {
    name: '乗船案内',
    href: '/#embarkation',
    icon: EmbarkationIcon,
  },
  { name: '運賃・料金', href: '/#price', icon: PriceIcon },
];
</script>
