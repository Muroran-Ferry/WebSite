<template>
  <header class="bg-white" v-bind="$attrs">
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="グローバル"
    >
      <div class="flex lg:flex-1">
        <SiteHeaderBrand />
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">メインメニューを表示する</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:grid lg:gap-y-4">
        <div class="order-1 ml-auto flex gap-x-8 xl:gap-x-12">
          <nuxt-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
            class="border-b-2 border-b-transparent text-base font-semibold leading-6 text-gray-900 transition-colors duration-200 hover:border-b-sky-500 hover:text-sky-500"
            >{{ item.name }}</nuxt-link
          >
        </div>
        <div class="order-0 ml-auto flex gap-x-6">
          <nuxt-link
            v-for="item in subNavigation"
            :key="item.name"
            :to="item.to"
            class="group flex items-center text-sm font-medium leading-4 text-gray-900 hover:text-sky-500"
          >
            <ChevronRightIcon
              class="h-4 fill-sky-500 stroke-0 pl-0 pr-2 transition-all group-hover:pl-2 group-hover:pr-0"
            />
            {{ item.name }}</nuxt-link
          >
        </div>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-30"></div>
      <DialogPanel
        class="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <nuxt-link href="#" class="-m-1.5 p-1.5">
            <SiteHeaderBrand />
          </nuxt-link>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">メニューを閉じる</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <nuxt-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                @click="mobileMenuOpen = false"
                >{{ item.name }}</nuxt-link
              >
            </div>
            <div class="space-y-2 py-6">
              <nuxt-link
                v-for="item in subNavigation"
                :key="item.name"
                :to="item.to"
                class="-mx-3 block rounded-lg py-2 px-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                @click="mobileMenuOpen = false"
                >{{ item.name }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel } from '@headlessui/vue';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/outline';

const navigation = [
  { name: '航路・時刻', to: { name: 'index', hash: '#schedule' } },
  { name: '施設情報', to: { name: 'index', hash: '#facility' } },
  { name: 'アクセス', to: { name: 'index', hash: '#access' } },
  { name: '予約案内', to: { name: 'index', hash: '#reserve' } },
  { name: '乗船案内', to: { name: 'index', hash: '#embarkation' } },
  { name: '運賃・料金', to: { name: 'index', hash: '#price' } },
  { name: '観光案内', to: { name: 'index', hash: '#tourist-information' } },
];
const subNavigation = [
  { name: 'サイトポリシー', to: { name: 'sitepolicy' } },
  { name: 'お問い合わせ', to: { name: 'index', hash: '#contact' } },
];

const mobileMenuOpen = ref(false);
</script>
