<template>
  <RouteSchedule header-class="bg-rose-500" route-name="青森発着（青蘭航路）">
    <template #header-description>
      <div class="mt-1 flex items-center text-sm font-semibold text-gray-50">
        運航事業者: 津軽海峡フェリー
      </div>
      <div class="mt-1 flex items-center text-sm font-semibold text-gray-50">
        運航期間: 2023年10月2日運航開始
      </div>
    </template>

    <section>
      <h5 class="text-lg font-semibold tracking-widest text-sky-500">
        室蘭 → 青森
        <span class="text-sm tracking-normal">(2025年3月31日まで)</span>
      </h5>

      <div class="max-w-4xl gap-y-2 sm:flex sm:justify-between sm:gap-x-2">
        <ScheduleItem label="便名 (船舶)" :centered="false">
          2 (ブルーマーメイド)
          <ShipChangeNotice
            period="2025年3月7日（金）〜2025年4月20日（日）"
            ship-name="ブルールミナス"
          />
        </ScheduleItem>
        <ScheduleItem label="室蘭発" value="20:00" :centered="true" />
        <ScheduleItem label="青森着" value="翌3:00" :centered="true" />
        <ScheduleItem label="所要時間" value="7時間" :centered="true" />
        <ScheduleItem label="運休日" value="日曜日" :centered="true" />
      </div>
    </section>

    <section>
      <h5 class="text-lg font-semibold tracking-widest text-sky-500">
        青森 → 室蘭
        <span class="text-sm tracking-normal">(2025年3月31日まで)</span>
      </h5>
      <div class="max-w-4xl gap-y-2 sm:flex sm:justify-between sm:gap-x-2">
        <ScheduleItem label="便名 (船舶)" :centered="false">
          1 (ブルーマーメイド)
          <ShipChangeNotice
            period="2025年3月7日（金）〜2025年4月20日（日）"
            ship-name="ブルールミナス"
          />
        </ScheduleItem>
        <ScheduleItem label="青森発" value="9:00" :centered="true" />
        <ScheduleItem label="室蘭着" value="15:45" :centered="true" />
        <ScheduleItem label="所要時間" value="6時間45分" :centered="true" />
        <ScheduleItem label="運休日" value="月曜日" :centered="true" />
      </div>
    </section>

    <section>
      <h5 class="text-lg font-semibold tracking-widest text-sky-500">
        室蘭 → 青森
        <span class="text-sm tracking-normal">(2025年4月1日から)</span>
      </h5>

      <div class="max-w-4xl gap-y-2 sm:flex sm:justify-between sm:gap-x-2">
        <ScheduleItem label="便名 (船舶)" :centered="false">
          2 (ブルーマーメイド)
          <ShipChangeNotice
            period="2025年3月7日（金）〜2025年4月20日（日）"
            ship-name="ブルールミナス"
          />
        </ScheduleItem>
        <ScheduleItem label="室蘭発" value="20:50" :centered="true" />
        <ScheduleItem label="青森着" value="翌3:50" :centered="true" />
        <ScheduleItem label="所要時間" value="7時間" :centered="true" />
        <ScheduleItem label="運休日" value="日曜日" :centered="true" />
      </div>
    </section>

    <section>
      <h5 class="text-lg font-semibold tracking-widest text-sky-500">
        青森 → 室蘭
        <span class="text-sm tracking-normal">(2025年4月1日から)</span>
      </h5>
      <div class="max-w-4xl gap-y-2 sm:flex sm:justify-between sm:gap-x-2">
        <ScheduleItem label="便名 (船舶)" :centered="false">
          1 (ブルーマーメイド)
          <ShipChangeNotice
            period="2025年3月7日（金）〜2025年4月20日（日）"
            ship-name="ブルールミナス"
          />
        </ScheduleItem>
        <ScheduleItem label="青森発" value="10:40" :centered="true" />
        <ScheduleItem label="室蘭着" value="17:25" :centered="true" />
        <ScheduleItem label="所要時間" value="6時間45分" :centered="true" />
        <ScheduleItem label="運休日" value="月曜日" :centered="true" />
      </div>
    </section>

    <template #note>
      <div
        v-for="(note, i) in notes"
        :key="`seiran-note-${i}`"
        class="text-sm text-gray-700"
      >
        {{ note }}
      </div>
      <div class="text-sm text-gray-700">
        ※最新の運航情報は津軽海峡フェリーへお問い合わせください。
        <TsugaruKaikyoContact />
      </div>
    </template>
  </RouteSchedule>
</template>

<script lang="ts" setup>
const notes = ref([
  '※船舶法定検査及び船体整備のため運休、並びに一部ダイヤが変更になる場合がございます。',
  '※函館～青森航路就航船舶の定期法定検査時も同航路就航船舶が代替運航するため運休、並びに一部ダイヤが変更になる場合がございます。',
  '※運航船舶は予告なく変更する場合がありますのでご了承ください。',
]);
</script>
