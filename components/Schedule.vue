<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <PageSection id="schedule">
    <template v-slot:header>航路・時刻</template>

    <div class="grid gap-4">
      <section>
        <header class="bg-rose-500 px-4 py-2">
          <h4 class="m-0 text-base font-semibold leading-6 text-white">
            青森発着（青蘭航路）
          </h4>
          <div
            class="flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6"
          >
            <div
              class="mt-1 flex items-center text-sm font-semibold text-gray-50"
            >
              運行事業者: 津軽海峡フェリー
            </div>
            <div
              class="mt-1 flex items-center text-sm font-semibold text-gray-50"
            >
              運航期間: 2023年10月2日運行開始
            </div>
          </div>
        </header>
        <div class="space-y-8 py-4">
          <section>
            <h5 class="text-lg font-semibold tracking-widest text-sky-500">
              室蘭 → 青森
            </h5>

            <div
              class="max-w-4xl gap-y-2 sm:flex sm:justify-between sm:gap-x-2"
            >
              <div class="grid grid-cols-3 sm:flex sm:flex-col">
                <div class="text-base font-medium text-gray-900 sm:text-lg">
                  便名 (船舶)
                </div>
                <div class="col-span-2 text-sm text-gray-700 sm:text-base">
                  2 (ブルーマーメイド)
                </div>
              </div>
              <div class="grid grid-cols-3 sm:flex sm:flex-col sm:text-center">
                <div class="text-base font-medium text-gray-900 sm:text-lg">
                  室蘭発
                </div>
                <div class="col-span-2 text-sm text-gray-700 sm:text-base">
                  20:00
                </div>
              </div>
              <div class="grid grid-cols-3 sm:flex sm:flex-col sm:text-center">
                <div class="text-base font-medium text-gray-900 sm:text-lg">
                  青森着
                </div>
                <div class="col-span-2 text-sm text-gray-700 sm:text-base">
                  翌3:00
                </div>
              </div>
              <div class="grid grid-cols-3 sm:flex sm:flex-col sm:text-center">
                <div class="text-base font-medium text-gray-900 sm:text-lg">
                  所要時間
                </div>
                <div class="col-span-2 text-sm text-gray-700 sm:text-base">
                  7時間
                </div>
              </div>
              <div class="grid grid-cols-3 sm:flex sm:flex-col sm:text-center">
                <div class="text-base font-medium text-gray-900 sm:text-lg">
                  運休日
                </div>
                <div class="col-span-2 text-sm text-gray-700 sm:text-base">
                  日曜日
                </div>
              </div>
            </div>
          </section>

          <section>
            <h5 class="text-lg font-semibold tracking-widest text-sky-500">
              青森 → 室蘭
            </h5>
            <div
              class="max-w-4xl gap-y-2 sm:flex sm:justify-between sm:gap-x-2"
            >
              <div class="grid grid-cols-3 sm:flex sm:flex-col">
                <div class="text-base font-medium text-gray-900 sm:text-lg">
                  便名 (船舶)
                </div>
                <div class="col-span-2 text-sm text-gray-700 sm:text-base">
                  1 (ブルーマーメイド)
                </div>
              </div>
              <div class="grid grid-cols-3 sm:flex sm:flex-col sm:text-center">
                <div class="text-base font-medium text-gray-900 sm:text-lg">
                  青森発
                </div>
                <div class="col-span-2 text-sm text-gray-700 sm:text-base">
                  9:00
                </div>
              </div>
              <div class="grid grid-cols-3 sm:flex sm:flex-col sm:text-center">
                <div class="text-base font-medium text-gray-900 sm:text-lg">
                  室蘭着
                </div>
                <div class="col-span-2 text-sm text-gray-700 sm:text-base">
                  15:45
                </div>
              </div>
              <div class="grid grid-cols-3 sm:flex sm:flex-col sm:text-center">
                <div class="text-base font-medium text-gray-900 sm:text-lg">
                  所要時間
                </div>
                <div class="col-span-2 text-sm text-gray-700 sm:text-base">
                  6時間45分
                </div>
              </div>
              <div class="grid grid-cols-3 sm:flex sm:flex-col sm:text-center">
                <div class="text-base font-medium text-gray-900 sm:text-lg">
                  運休日
                </div>
                <div class="col-span-2 text-sm text-gray-700 sm:text-base">
                  月曜日
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="py-4">
          <div class="text-sm text-gray-700">
            ※船舶法定検査及び船体整備のため運休、並びに一部ダイヤが変更になる場合がございます。
          </div>
          <div class="text-sm text-gray-700">
            ※函館～青森航路就航船舶の定期法定検査時も同航路就航船舶が代替運航するため運休、並びに一部ダイヤが変更になる場合がございます。
          </div>
          <div class="text-sm text-gray-700">
            ※運航船舶は予告なく変更する場合がありますのでご了承ください。
          </div>
          <div class="text-sm text-gray-700">
            ※最新の運航情報は津軽海峡フェリーへお問い合わせください。
            <dl class="not-prose ml-4 mt-2 space-y-2">
              <div class="flex items-center">
                <dt class="mr-1 text-sm font-semibold text-gray-700">
                  ホームページ:
                </dt>
                <dd>
                  <a
                    class="text-blue-600 underline decoration-blue-600 hover:text-blue-900 hover:decoration-blue-900"
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
              <div class="flex items-center">
                <dt class="mr-1 text-sm font-semibold text-gray-700">
                  電話番号:
                </dt>
                <dd>
                  <a
                    class="text-blue-600 underline decoration-blue-600 hover:text-blue-900 hover:decoration-blue-900"
                    href="tel:0143-83-4080"
                    >0143-83-4080</a
                  >
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section>
        <h4
          class="bg-lime-500 px-4 py-2 text-base font-semibold leading-6 text-white"
        >
          宮古・八戸発着（宮蘭航路）
        </h4>
        <div class="py-4">運行休止中</div>
      </section>
    </div>
  </PageSection>
</template>
