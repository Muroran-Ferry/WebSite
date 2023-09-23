<template>
  <div v-if="announcement.linkTo">
    <nuxt-link
      :href="announcement.linkTo"
      v-bind="anchorBind"
      class="text-sm font-semibold text-sky-600 underline decoration-sky-600 hover:text-sky-800 hover:decoration-sky-800"
    >
      {{ announcement.title }}
    </nuxt-link>
  </div>
  <div v-else class="text-sm font-semibold text-gray-900">
    {{ announcement.title }}
  </div>
</template>

<script lang="ts" setup>
import type { Announcement } from '~/schemas/announcement_schema';

interface Props {
  announcement: Announcement;
}

const props = withDefaults(defineProps<Props>(), {});

const anchorBind = computed(() => {
  return props.announcement.linkTo &&
    props.announcement.linkTo.startsWith('http')
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};
});
</script>

<style></style>
