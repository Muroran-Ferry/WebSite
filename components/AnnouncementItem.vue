<template>
  <div v-if="announcement.linkTo">
    <nuxt-link
      :href="announcement.linkTo"
      v-bind="anchorBind"
      class="text-sm font-semibold text-sky-600 underline decoration-sky-600 hover:text-sky-800 hover:decoration-sky-800"
    >
      {{ announcement.title }}
      <ArrowTopRightOnSquareIcon
        v-if="isExternalLink"
        class="-mt-1 ml-1 inline-block size-4"
      />
    </nuxt-link>
  </div>
  <div v-else class="text-sm font-semibold text-gray-900">
    {{ announcement.title }}
  </div>
</template>

<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';

import type { Announcement } from '~/schemas/announcement_schema';

interface Props {
  announcement: Announcement;
}

const props = withDefaults(defineProps<Props>(), {});

const anchorBind = computed(() => {
  return isExternalLink.value
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};
});

const isExternalLink = computed(() => {
  return (
    props.announcement.linkTo && props.announcement.linkTo.startsWith('http')
  );
});
</script>
