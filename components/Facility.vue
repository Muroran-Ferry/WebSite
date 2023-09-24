<template>
  <PageSection id="facility">
    <template v-slot:header>施設情報</template>

    <div class="text-base font-semibold text-red-600">
      2023年9月25日より施設開業予定です。
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <section>
        <h4
          class="bg-sky-500 px-4 py-2 text-base font-semibold leading-6 text-white"
        >
          売店
        </h4>
        <dl>
          <dt>営業時間</dt>
          <dd>10時から16時（予定）</dd>
        </dl>
      </section>

      <section>
        <h4
          class="bg-sky-500 px-4 py-2 text-base font-semibold leading-6 text-white"
        >
          津軽海峡フェリー室蘭支店
        </h4>
        <dl>
          <dt>電話番号</dt>
          <dd>
            <a href="tel:0143-83-4080">0143-83-4080</a>
          </dd>
          <dt>営業時間</dt>
          <dd>
            <ul>
              <li>9:00～20:00（月曜日～土曜日）</li>
              <li>9:00～17:00（日曜日）</li>
            </ul>
          </dd>
        </dl>
      </section>
    </div>
  </PageSection>
</template>
