<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <PageSection id="reserve">
    <template #header>予約案内</template>

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
              <dt>予約開始日</dt>
              <dd>
                <p>3ヶ月前の同日午前9時～</p>
                <p class="text-sm text-gray-500">
                  ＜例:初便10月2日乗船予約は7月2日午前9時～＞
                </p>
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>電話予約</dt>
              <dd>
                <ul>
                  <li>
                    津軽海峡フェリー室蘭支店:
                    <a href="tel:0143-83-4080">0143-83-4080</a>
                  </li>
                  <li>
                    津軽海峡フェリー青森支店:
                    <a href="tel:017-766-4733">017-766-4733</a>
                  </li>
                </ul>

                <p class="text-sm">
                  受付時間、お支払い方法など詳細は
                  <a
                    href="https://www.tsugarukaikyo.co.jp/reservation/payment02/"
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

              <dt>オンライン予約</dt>
              <dd>
                <a
                  class="break-all"
                  href="https://www.tsugarukaikyo.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >津軽海峡フェリー (https://www.tsugarukaikyo.co.jp/)
                  <ArrowTopRightOnSquareIcon
                    class="-mt-1 inline size-4"
                    aria-hidden="true"
                  />
                </a>

                <p class="text-sm">
                  手順、お支払い方法など詳細は
                  <a
                    href="https://www.tsugarukaikyo.co.jp/reservation/payment/"
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

              <dt>ターミナル窓口（予約）</dt>
              <dd>
                <ul>
                  <li>【予約受付時間】9:00～18:00</li>
                  <li>【受付】ご乗船日の3ヶ月前9:00～出航4時間前まで</li>
                </ul>

                <p class="text-sm">
                  ※お車・バイクの場合は車検証をお持ちになり、乗船港のターミナル窓口へお越しください。
                </p>

                <p class="text-sm">
                  注意事項など詳細は
                  <a
                    href="https://www.tsugarukaikyo.co.jp/reservation/payment03/"
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

              <dt>ターミナル窓口（当日）</dt>
              <dd>
                当日受付の場合、混雑具合によってはご乗船いただけない場合がございます。<br />
                詳細は
                <a
                  href="https://www.tsugarukaikyo.co.jp/reservation/embarkation/#minititle_on_the_day"
                  target="_blank"
                  rel="noopener noreferrer"
                  >津軽海峡フェリー公式サイト<ArrowTopRightOnSquareIcon
                    class="-mt-1 inline size-4"
                    aria-hidden="true"
                  />
                </a>
                をご確認ください。
              </dd>
            </dl>
          </div>
        </div>
      </section>
    </div>
  </PageSection>
</template>
