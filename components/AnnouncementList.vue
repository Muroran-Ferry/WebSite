<template>
  <div v-if="announcements.loading">読み込み中...</div>
  <div v-else-if="announcements.data.length === 0">お知らせはありません</div>
  <div v-else class="space-y-1" role="list">
    <AnnouncementItem
      v-for="(announcement, i) in announcements.data"
      :key="i"
      :announcement="announcement"
      role="listitem"
    />
  </div>
</template>

<script lang="ts" setup>
import { announcementSchema } from '~/schemas/announcement_schema';

import type { Announcement } from '~/schemas/announcement_schema';

const config = useRuntimeConfig();

// refs
const announcements = ref({
  loading: false,
  data: [] as Announcement[],
});

try {
  announcements.value.loading = true;
  const { data } = await useLazyFetch(config.public.ANNOUNCEMENT_API_URL);
  announcements.value.data = announcementSchema.array().parse(data.value);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
} finally {
  announcements.value.loading = false;
}
</script>
