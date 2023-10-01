<template>
  <dl class="not-prose ml-4 mt-2 space-y-2">
    <div class="sm:flex sm:items-center">
      <dt>ホームページ</dt>
      <dd>
        <a
          class="break-all text-blue-600 underline decoration-blue-600 hover:text-blue-900 hover:decoration-blue-900"
          href="https://www.tsugarukaikyo.co.jp/"
          target="_blank"
          rel="noopener noreferrer"
          >https://www.tsugarukaikyo.co.jp/
          <ArrowTopRightOnSquareIcon
            class="-mt-1 inline h-4 w-4"
            aria-hidden="true"
          />
        </a>
      </dd>
    </div>
    <div class="sm:flex sm:items-center">
      <dt>電話番号</dt>
      <dd>
        <a
          class="text-blue-600 underline decoration-blue-600 hover:text-blue-900 hover:decoration-blue-900"
          href="tel:0143-83-4080"
          >0143-83-4080</a
        >
      </dd>
    </div>
  </dl>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
</script>

<style lang="postcss" scoped>
dt {
  @apply text-sm font-semibold text-gray-700;

  &::after {
    content: ': ';
  }
}

dd {
  @apply ml-4 sm:flex-1;
}
</style>
