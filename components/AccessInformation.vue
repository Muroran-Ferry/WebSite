<template>
  <PageSection id="access">
    <template #header>アクセス</template>
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
      <OrganismsAccessItem>
        <template #title>住所</template>
        〒051-0023 北海道室蘭市⼊江町１番地５０
      </OrganismsAccessItem>

      <OrganismsAccessItem>
        <template #title>MAPCODE</template>
        <p class="select-all">159 252 650*88</p>
      </OrganismsAccessItem>

      <OrganismsAccessItem>
        <template #title>最寄り</template>
        <dl>
          <dt>バス</dt>
          <dd class="ml-4">
            <ul>
              <li>道南バス「入江運動公園」停留所 徒歩約10分</li>
              <li>道南バス・中央バス「室蘭観光協会前」停留所 徒歩約15分</li>
            </ul>
          </dd>
          <dt>JR</dt>
          <dd class="ml-4">室蘭駅 徒歩約15分</dd>
          <dt>高速道路</dt>
          <dd class="ml-4">室蘭IC</dd>
        </dl>
      </OrganismsAccessItem>

      <OrganismsAccessItem>
        <template #title>主要都市からの所要時間</template>
        <ul>
          <li>札幌から: 約2時間 (道央自動車道)</li>
          <li>新千歳空港から: 約1時間20分 (道央自動車道)</li>
          <li>苫小牧から: 約1時間15分 (道央自動車道)</li>
          <li>函館から: 約3時間 (道央自動車道)</li>
        </ul>
      </OrganismsAccessItem>

      <OrganismsAccessItem>
        <template #title>駐車場について</template>
        ターミナル駐車場は乗下船及び送迎等の短時間の利用を目的としたスペースです。<br />
        フェリーを利用しての旅行の際は、お車を駐車場に停めておくことはできませんので、公共交通機関にてお越しください。
      </OrganismsAccessItem>
    </dl>
  </PageSection>
</template>

<script setup lang="ts">
import type { BoatTerminal, WithContext, PostalAddress } from 'schema-dts';

useJsonld((): [WithContext<BoatTerminal>] => {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BoatTerminal',
      name: '室蘭フェリーターミナル',
      address: {
        addressLocality: '室蘭市',
        addressRegion: '北海道',
        postalCode: '051-0023',
        streetAddress: '⼊江町１番地５０',
      } as PostalAddress,
    },
  ];
});
</script>

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
