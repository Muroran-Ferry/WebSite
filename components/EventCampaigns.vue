<template>
  <PageSection id="campaigns">
    <template #header>キャンペーン</template>

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <CampaignCard
        v-for="(campaign, i) in campaigns"
        :key="i"
        :img-src="campaign.imgSrc"
        :title="campaign.title"
        :description="campaign.description"
        :meta="campaign.meta"
        :href="campaign.href"
      />
    </div>
  </PageSection>
</template>

<script lang="ts" setup>
// refs
const campaigns = ref([
  {
    imgSrc: '/blue_grace_campaign.png',
    title: '新造船ブルーグレイス就航記念割引',
    description:
      '室蘭～青森航路に新造船ブルーグレイスが就航！2025年7月14日～12月31日の期間限定で、普通車16,000円、軽自動車14,000円の特別価格でご利用いただけます。同乗者は大人2,500円、小児1,250円の追加料金でご乗船可能です。',
    meta: ['津軽海峡フェリー', '期間限定'],
    href: 'https://www.tsugarukaikyo.co.jp/guidance/blue_grace-syuukoukinenwaribiki-20250606/',
  },
  {
    imgSrc: '/tsugarukaikyo_umiwari_drive_plus_2023.jpg',
    title: 'おトクに乗船！5日前までのWEB予約限定プラン「海割ドライブ プラス」',
    description:
      'WEB限定のご予約で、ドライバー以外の同乗者最大7名が利用可能！お一人様でのご利用もOK！定額運賃なので旅行の予算も決めやすくて、便利でおトク！差額をプラスで上等級アップグレードも可能です。',
    meta: ['津軽海峡フェリー'],
    href: 'https://www.tsugarukaikyo.co.jp/plan/umiwaridriveplus/',
  },
  {
    imgSrc: '/tsugarukaikyo_umiwari_walk_2023.jpg',
    title: '徒歩でおトクに乗船！5日前までのWEB予約限定プラン「海割ウォーク」',
    description:
      '徒歩乗船でおトク。北海道や東北への旅をご検討中の皆さまに、5日前までのWEB予約限定プラン「海割ウォーク」がおすすめ！おトクな金額で、気軽に海峡を渡る旅を。差額をプラスで上等級アップグレードも可能です。',
    meta: ['津軽海峡フェリー'],
    href: 'https://www.tsugarukaikyo.co.jp/plan/umiwariwalk/',
  },
]);
</script>
