<template>
  <PageSection id="tourist-information">
    <template v-slot:header>観光案内</template>
    <div class="grid gap-4">
      <section>
        <h4 class="px-4 py-2 text-base font-semibold leading-6 text-gray-900">
          室蘭の観光情報
        </h4>
        <ul role="list" class="list-disc space-y-2 pl-10 pr-4">
          <li>
            <a
              href="http://muro-kanko.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              室蘭観光情報サイト: おっと！むろらん
              <ArrowTopRightOnSquareIcon
                class="-mt-1 inline h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h4 class="px-4 py-2 text-base font-semibold leading-6 text-gray-900">
          青森の観光情報
        </h4>
        <ul role="list" class="list-disc space-y-2 pl-10 pr-4">
          <li>
            <a
              href="https://www.atca.info/"
              rel="noopener noreferrer"
              target="_blank"
            >
              青森市観光情報サイト: あおもり案内名人
              <ArrowTopRightOnSquareIcon
                class="-mt-1 inline h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h4 class="px-4 py-2 text-base font-semibold leading-6 text-gray-900">
          宮古の観光情報
        </h4>
        <ul role="list" class="list-disc space-y-2 pl-10 pr-4">
          <li>
            <a
              href="https://www.city.miyako.iwate.jp/sightseeing.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              宮古市: 観光情報
              <ArrowTopRightOnSquareIcon
                class="-mt-1 inline h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a
              href="https://kankou385.jp/"
              rel="noopener noreferrer"
              target="_blank"
            >
              宮古観光文化交流協会
              <ArrowTopRightOnSquareIcon
                class="-mt-1 inline h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </section>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
</script>
