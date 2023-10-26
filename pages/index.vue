<template>
  <div>
    <ToppageHero class="not-prose z-0">
      <div class="hidden w-full sm:absolute sm:bottom-[12%] sm:z-50 sm:block">
        <div class="mx-auto max-w-7xl px-16 xl:px-24">
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
      <PageSection id="schedule">
        <template v-slot:header>お知らせ</template>
        <AnnouncementList class="not-prose" />
      </PageSection>
    </div>

    <Campaigns class="not-prose" />
    <Schedule
      class="prose mb-6 prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
    />
    <Facility
      class="prose mb-6 prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
    />
    <Access
      class="prose mb-6 prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
    />
    <Reserve
      class="prose mb-6 prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
    />
    <Embarkation
      class="prose mb-6 prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
    />
    <Price
      class="prose mb-6 prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
    />
    <TouristInformation
      class="prose mb-6 prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
    />

    <GooglePlacesPhotos />

    <div class="bg-sky-500 pb-8">
      <Contact
        class="prose prose-a:text-blue-600 prose-a:underline prose-a:decoration-blue-600 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-900"
      />
    </div>
  </div>
</template>
