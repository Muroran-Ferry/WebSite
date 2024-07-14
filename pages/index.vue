<template>
  <div>
    <ToppageHero class="not-prose z-0">
      <div class="hidden w-full sm:absolute sm:bottom-[12%] sm:z-50 sm:block">
        <div class="mx-auto max-w-7xl space-y-4 px-16 xl:px-24">
          <div
            class="flex w-full max-w-xl items-stretch rounded-md bg-white/80 p-4"
          >
            <header class="px-4 py-2">
              <h3 class="text-xl font-semibold text-sky-500">運航状況</h3>
            </header>

            <ClientOnly>
              <SeiranStatus
                class="not-prose inline-flex items-center px-4 py-2"
                :status="status"
              />
            </ClientOnly>
          </div>

          <div class="w-full max-w-xl rounded-md bg-white/80 p-4">
            <header class="mb-2 border-b border-sky-500">
              <h3
                class="w-fit border-b-4 border-sky-500 text-xl font-semibold text-sky-500"
              >
                お知らせ
              </h3>
            </header>

            <AnnouncementList class="not-prose" />
          </div>
        </div>
      </div>
    </ToppageHero>
    <MainMenu class="not-prose relative z-10" />

    <div class="w-full sm:hidden">
      <section id="status" class="mx-auto max-w-7xl p-6 lg:px-8">
        <div class="flex items-stretch border-4 border-sky-500">
          <header
            class="inline-flex flex-none items-center bg-sky-500 px-4 py-2"
          >
            <h3 class="text-xl font-semibold leading-6 text-gray-100">
              運航状況
            </h3>
          </header>
          <ClientOnly>
            <SeiranStatus
              class="not-prose inline-flex items-center px-4 py-2"
              :status="status"
            />
          </ClientOnly>
        </div>
      </section>

      <PageSection id="schedule">
        <template #header>お知らせ</template>
        <AnnouncementList class="not-prose" />
      </PageSection>
    </div>

    <EventCampaigns class="not-prose" />
    <RouteSchedule
      class="prose mb-6 prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
    />
    <FacilityInformation
      class="prose mb-6 prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
    />
    <LazyAccessInformation
      class="prose mb-6 prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
    />
    <LazyBoardingReservation
      class="prose mb-6 prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
    />
    <LazyBoardingGuide
      class="prose mb-6 prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
    />
    <LazyTicketPrice
      class="prose mb-6 prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
    />
    <LazyTouristInformation
      class="prose mb-6 prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
    />

    <ClientOnly>
      <LazyGooglePlacesPhotos />
    </ClientOnly>

    <div class="bg-sky-500 pb-8">
      <LazyContactInformation
        class="prose prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { WebSite, Organization, WithContext } from 'schema-dts';

import { seiranStatus } from '~/schemas/seiran_status';

import type { SeiranStatus } from '~/schemas/seiran_status';

const config = useRuntimeConfig();

useJsonld((): [WithContext<WebSite>, WithContext<Organization>] => {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: '室蘭フェリーターミナル',
      url: 'https://muroran-ferry.net/',
      alternateName: [
        '室蘭フェリーターミナル',
        '室蘭港フェリーターミナル',
        'Muroran Ferry Terminal',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '室蘭フェリーターミナル',
      url: 'https://muroran-ferry.net/',
    },
  ];
});

// refs
const status = ref({
  loading: false,
  data: null as SeiranStatus | null,
});

const timer = ref<number | null>(null);

// methods
const fetchStatus = async () => {
  try {
    status.value.loading = true;
    const data = await $fetch(config.public.SEIRAN_STATUS_API_URL);
    status.value.data = seiranStatus.parse(data);
  } catch (error) {
    status.value.data = null;
    console.error(error);
  } finally {
    status.value.loading = false;
  }
};

// lifecycle
onMounted(async () => {
  await fetchStatus();

  if (!timer.value) {
    timer.value = window.setInterval(
      async () => {
        await fetchStatus();
      },
      1000 * 60 * 2
    );
  }
});

onUnmounted(() => {
  if (timer.value) {
    window.clearInterval(timer.value);
  }
});
</script>
