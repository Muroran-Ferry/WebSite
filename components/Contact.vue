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
            <TsugaruKaikyoContact />
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
        <h4>ウェブサイトに関するお問い合わせ・情報提供</h4>
        <div class="py-4">
          <p>右下の「お問い合わせ」よりお問い合わせください。</p>
          <p>
            内容の正確性には細心の注意を払っておりますが、万一、誤りがあった場合はご指摘いただけますと幸いです。
          </p>
          <p>
            なお、本サイトはファンサイトであり、公式サイトではありません。
            予めご了承ください。
          </p>
        </div>
      </section>
    </div>
  </ReversePageSection>
</template>

<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
</script>
