<template>
  <div>
    <div v-if="status.data === null && status.loading" class="text-gray-500">読み込み中...</div>
    <div v-else-if="status.data" class="text-gray-700">
      <div v-if="status.data.statusText">
        <div class="space-x-1 leading-3">
          <span class="text-xl font-semibold tracking-wider">{{ status.data.statusText }}</span>
          <span class="text-sm">({{ cdate(status.data.updatedAt).format('H:mm') }}現在)</span>
        </div>
        <div class="hidden sm:block text-xs text-gray-500 ">
          ※津軽海峡フェリー株式会社のホームページから取得した情報です。
        </div>
      </div>
      <div v-else class="text-gray-700">取得に失敗しました</div>
    </div>
    <div v-else class="text-gray-700">
      取得に失敗しました
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cdate } from 'cdate';

import type { SeiranStatus } from '~/schemas/seiran_status';

interface Props {
  status: {
    loading: boolean;
    data: SeiranStatus | null;
  };
}

withDefaults(defineProps<Props>(), {});
</script>
