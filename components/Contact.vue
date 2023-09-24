<template>
  <ReversePageSection id="contact">
    <template v-slot:header>お問い合わせ</template>

    <div class="grid gap-4 bg-white px-8 py-6">
      <section>
        <h4>フェリーに関するお問い合わせ（運行・運賃/料金・予約等）</h4>
        <div class="py-4">各運行会社にお問い合わせください。</div>
        <div class="py-4">
          <h5
            class="flex flex-wrap items-center justify-between border-b-2 border-rose-500 px-4 py-2 font-semibold text-rose-500"
          >
            青森発着（青蘭航路）
          </h5>
          <div class="mt-4">
            津軽海峡フェリー株式会社

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
        <h4>施設・店舗・アクセス・乗船案内等に関するお問い合せ</h4>
        <div class="py-4">
          フェリーターミナル管理者、フェリーターミナル所有者にお問い合わせください。
        </div>
      </section>

      <section>
        <h4>観光に関するお問い合わせ</h4>
        <div class="py-4">各観光協会にお問い合わせください。</div>
      </section>

      <section>
        <h4>ウェブサイトに関するお問い合わせ</h4>
        <div class="py-4">
          <a
            href="https://github.com/Muroran-Ferry/WebSite"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub: Muroran-Ferry/WebSite
          </a>
        </div>
      </section>
    </div>
  </ReversePageSection>
</template>

<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
</script>
