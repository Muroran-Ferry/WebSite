<template>
  <PageSection id="access">
    <template v-slot:header>アクセス</template>
    <div class="ggmap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4612.725104020737!2d140.97539344487194!3d42.32534525999099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9fda9bd99e3641%3A0xe4a872684854469d!2z5a6k6Jit44OV44Kn44Oq44O844K_44O844Of44OK44Or!5e0!3m2!1sja!2sjp!4v1521888728832"
        :style="{ border: 0, margin: 'auto' }"
        class="rounded"
        title="GoogleMap"
        allowFullScreen
      ></iframe>
    </div>

    <dl class="not-prose sm:divide-y sm:divide-gray-200">
      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt class="text-sm font-medium text-gray-700 sm:pl-8">住所</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          〒051-0023 北海道室蘭市⼊江町１番地５０
        </dd>
      </div>

      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt class="text-sm font-medium text-gray-700 sm:pl-8">MAPCODE</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          159 252 650*88
        </dd>
      </div>

      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt class="text-sm font-medium text-gray-700 sm:pl-8">最寄り</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul>
            <li>バス: 道南バス「室蘭港」停留所 徒歩約10分</li>
            <li>JR: 室蘭駅 徒歩約15分</li>
            <li>高速道路: 室蘭IC</li>
          </ul>
        </dd>
      </div>

      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt class="text-sm font-medium text-gray-700 sm:pl-8">
          主要都市からの所要時間
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul>
            <li>札幌から: 約2時間 (道央自動車道)</li>
            <li>新千歳空港から: 約1時間20分 (道央自動車道)</li>
            <li>苫小牧から: 約1時間15分 (道央自動車道)</li>
            <li>函館から: 約3時間 (道央自動車道)</li>
          </ul>
        </dd>
      </div>
    </dl>
  </PageSection>
</template>

<style lang="postcss" scoped>
/* Google Maps */
.ggmap {
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

<script setup lang="ts">
import { BoatTerminal, WithContext, PostalAddress } from 'schema-dts';

useJsonld((): [WithContext<BoatTerminal>] => {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BoatTerminal',
      name: '室蘭フェリーターミナル',
      address: <PostalAddress>{
        addressLocality: '室蘭市',
        addressRegion: '北海道',
        postalCode: '051-0023',
        streetAddress: '⼊江町１番地５０',
      },
    },
  ];
});
</script>
