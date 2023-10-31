<template>
  <PageSection id="tourist-information">
    <template v-slot:header>フォトギャラリー</template>
    <div class="space-y-4">
      <p class="text-sm text-gray-700">
        Google Maps に投稿されたフェリーターミナルの写真です。
      </p>
      <Fancybox
        :options="{
          Carousel: {
            infinite: false,
          },
        }"
      >
        <masonry-wall
          :items="photos"
          :ssr-columns="1"
          :column-width="300"
          :gap="16"
        >
          <template #default="{ item, index }">
            <a class="relative" data-fancybox="gallery" :href="item.src">
              <img
                :src="item.src"
                :alt="`${item.authorAttributions
                  .map((attr) => `${attr.displayName}さん`)
                  .join('，')}が撮影した室蘭フェリーターミナル`"
              />
              <div
                class="photo-by absolute right-1 top-1 bg-white/50 p-1 text-xs"
              >
                Photo by
                <template v-for="(attr, i) in item.authorAttributions" :key="i">
                  <nuxt-link
                    v-if="attr.uri"
                    class="text-blue-600 underline decoration-blue-600"
                    :to="attr.uri"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ attr.displayName }}</nuxt-link
                  >
                  <span v-else>{{ attr.displayName }}</span>
                </template>
              </div>
            </a>
          </template>
        </masonry-wall>
      </Fancybox>
      <nuxt-link
        :to="`https://www.google.com/maps/search/?api=1&query=${encodeURI(
          '室蘭フェリーターミナル'
        )}&query_place_id=${config.public.PLACE_ID}`"
        class="block w-full rounded-md bg-sky-500 px-4 py-2 text-center font-semibold text-white"
        target="_blank"
        rel="noopener noreferrer"
        >Google Maps でもっと見る</nuxt-link
      >
    </div>
  </PageSection>
</template>

<script lang="ts" setup>
import { Loader } from '@googlemaps/js-api-loader';

const config = useRuntimeConfig();

// ref
const photos = ref(
  [] as {
    authorAttributions: google.maps.places.AuthorAttribution[];
    src: string;
    heightPx: number;
    widthPx: number;
  }[]
);

onMounted(() => {
  // Google Maps API (Places API)
  const loader = new Loader({
    apiKey: config.public.GOOGLE_MAPS_API_KEY,
    version: 'beta',
    libraries: ['places'],
  });

  // 写真の最大幅を画面幅と 1000px のうち小さい方にする
  const maxWidth = Math.min(window.innerWidth, 1000);

  // Google Maps API の Places API から写真を取得する
  loader
    .importLibrary('places')
    .then(async ({ Place }) => {
      const { place } = await new Place({
        id: config.public.PLACE_ID,
      }).fetchFields({ fields: ['photos'] });
      // NOTE: APIコール数を抑えるため、写真は最大8枚まで取得する
      photos.value =
        place.photos?.slice(0, 8)?.map((photo) => ({
          authorAttributions: photo.authorAttributions,
          src: photo.getURI({ maxWidth }),
          heightPx: photo.heightPx,
          widthPx: photo.widthPx,
        })) ?? [];
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>

<style scoped lang="postcss">
.photo-by :not(:last-child) {
  &::after {
    content: ', ';
  }
}
</style>