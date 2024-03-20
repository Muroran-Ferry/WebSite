<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <PageSection id="embarkation">
    <template #header>乗船案内</template>

    <div class="grid gap-8">
      <section>
        <h4
          class="bg-sky-500 px-4 py-2 text-base font-semibold leading-6 text-white"
        >
          津軽海峡フェリー（青蘭航路）
        </h4>

        <div class="grid gap-4">
          <div>
            <dl>
              <dt>ご乗船の流れ</dt>
              <dd>
                <ol>
                  <li>受付</li>
                  <li>発券</li>
                  <li>乗船</li>
                </ol>
              </dd>

              <dt>受付までご持参いただくもの</dt>
              <dd>
                <ul>
                  <li>予約番号（ご予約のお客様）</li>
                  <li>乗船申込書（当日受付のお客様）</li>
                  <li>車検証（お車でのご乗船）</li>
                </ul>
              </dd>

              <dt>受付開始時間</dt>
              <dd>
                <p>出港時刻の約90分前から受付開始します。</p>
                <p>
                  事前にお支払いがお済みのお客様は、スマートチェックインで簡単に乗船手続きが完了いたします。<br />
                  スマートチェックインの詳細は
                  <a
                    href="https://www.tsugarukaikyo.co.jp/reservation/smart_checkin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >津軽海峡フェリー公式サイト<ArrowTopRightOnSquareIcon
                      class="-mt-1 inline size-4"
                      aria-hidden="true"
                    />
                  </a>
                  をご確認ください。
                </p>
              </dd>
            </dl>
          </div>
          <div class="text-sm">
            その他、詳細は
            <a
              href="https://www.tsugarukaikyo.co.jp/reservation/embarkation/"
              target="_blank"
              rel="noopener noreferrer"
              >津軽海峡フェリー公式サイト<ArrowTopRightOnSquareIcon
                class="-mt-1 inline size-4"
                aria-hidden="true"
              />
            </a>
            にてご確認いただけます。
            不明点は公式サイトをご確認の上、津軽海峡フェリーまでお問い合わせください。
          </div>
        </div>
      </section>
    </div>
  </PageSection>
</template>
