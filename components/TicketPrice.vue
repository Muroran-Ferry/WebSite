<template>
  <PageSection id="price">
    <template #header>運賃・料金</template>

    <div class="grid grid-cols-1 gap-4">
      <section>
        <h4
          class="bg-rose-500 px-4 py-2 text-base font-semibold leading-6 text-white"
        >
          青森発着（青蘭航路）
        </h4>
        <div class="py-4">
          <p>
            ご乗船日（A期間、B期間、C期間）により運賃が異なります。<br />
            該当する期間に対応する運賃・料金をご参照ください。
          </p>

          <SeiranPriceSchedule
            v-if="!priceSchedules.loading && priceSchedules.data.length > 0"
            class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-stretch"
            :price-schedules="priceSchedules.data"
          />

          <!-- 1月-4月の臨時運休 -->
          <SeiranTemporarySuspension class="mt-8" />

          <!-- ゴールデンウィーク臨時便 -->
          <SeiranGW2024Calendar class="mt-8" />

          <PriceClassCalendar
            v-if="
              !priceSchedules.loading &&
              priceSchedules.data.length > 0 &&
              calendarStartDate <= calendarEndDate
            "
            class="mt-8"
            :price-schedules="priceSchedules.data"
            :start-date="calendarStartDate"
            :end-date="calendarEndDate"
            :color="{
              A: 'bg-orange-100',
              B: 'bg-sky-200',
              C: 'bg-lime-100',
            }"
          />

          <div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div class="space-y-4">
              <header
                class="flex flex-wrap items-center justify-between border-b-2 border-sky-500 px-4 py-2 text-gray-900"
              >
                <h5 class="text-base font-semibold leading-6">旅客運賃</h5>
                <div class="ml-auto text-sm">単位：円（消費税率・10%内税）</div>
              </header>

              <div>
                <ul class="text-sm">
                  <li>
                    旅客運賃割引・割増後の端数処理については、10円未満の端数切り上げとなります。
                  </li>
                  <li>
                    スイート・コンフォートの定員未満のご利用時は、貸切料金が必要となります。
                  </li>
                </ul>
              </div>

              <div>
                <header
                  class="flex flex-wrap items-center justify-between bg-gray-100 px-4 py-2"
                >
                  <h6 class="text-sm font-semibold leading-5">大人</h6>
                  <div class="text-xs">（12歳以上）</div>
                </header>

                <table class="mb-0 mt-4 w-full text-sm">
                  <thead>
                    <tr>
                      <th class="px-2 py-1 text-left"></th>
                      <th class="bg-orange-300 px-2 py-1 text-center">A期間</th>
                      <th class="bg-sky-300 px-2 py-1 text-center">B期間</th>
                      <th class="bg-lime-300 px-2 py-1 text-center">C期間</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="px-2 py-1">スイート</th>
                      <td class="bg-orange-100 px-2 py-1 text-center">
                        12,730
                      </td>
                      <td class="bg-sky-100 px-2 py-1 text-center">14,000</td>
                      <td class="bg-lime-100 px-2 py-1 text-center">15,400</td>
                    </tr>
                    <tr>
                      <th class="px-2 py-1">コンフォート</th>
                      <td class="bg-orange-100 px-2 py-1 text-center">
                        10,180
                      </td>
                      <td class="bg-sky-100 px-2 py-1 text-center">11,200</td>
                      <td class="bg-lime-100 px-2 py-1 text-center">12,320</td>
                    </tr>
                    <tr>
                      <th class="px-2 py-1">ビューシート</th>
                      <td class="bg-orange-100 px-2 py-1 text-center">7,640</td>
                      <td class="bg-sky-100 px-2 py-1 text-center">8,400</td>
                      <td class="bg-lime-100 px-2 py-1 text-center">9,240</td>
                    </tr>
                    <tr>
                      <th class="px-2 py-1">スタンダード</th>
                      <td class="bg-orange-100 px-2 py-1 text-center">5,090</td>
                      <td class="bg-sky-100 px-2 py-1 text-center">5,600</td>
                      <td class="bg-lime-100 px-2 py-1 text-center">6,160</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <header
                  class="flex flex-wrap items-center justify-between bg-gray-100 px-4 py-2"
                >
                  <h6 class="text-sm font-semibold leading-5">小児</h6>
                  <div class="text-xs">（6歳以上12歳未満）</div>
                </header>

                <div class="mt-4 text-sm">
                  大人運賃の半額 ※10円未満の端数は四捨五入
                </div>
              </div>

              <div>
                <header
                  class="flex flex-wrap items-center justify-between bg-gray-100 px-4 py-2"
                >
                  <h6 class="text-sm font-semibold leading-5">幼児</h6>
                  <div class="text-xs">（6歳未満）</div>
                </header>

                <div class="mt-4 text-sm">
                  <ul>
                    <li>
                      大人1名に同伴される6歳未満の幼児は1名のみ無料です。ただし、指定席・個室ベッドをご利用になるときは小児運賃を適用いたします。
                    </li>
                    <li>
                      大人1名に同伴される1名を超える幼児は小児運賃が必要です。
                    </li>
                    <li>1歳未満の乳児は無料です。</li>
                  </ul>
                </div>
              </div>

              <div>
                <header
                  class="flex flex-wrap items-center justify-between bg-gray-100 px-4 py-2"
                >
                  <h6 class="text-sm font-semibold leading-5">
                    ドライバー差額
                  </h6>
                </header>

                <table class="mb-0 mt-4 w-full text-sm">
                  <thead>
                    <tr>
                      <th class="px-2 py-1 text-left"></th>
                      <th class="bg-orange-300 px-2 py-1 text-center">A期間</th>
                      <th class="bg-sky-300 px-2 py-1 text-center">B期間</th>
                      <th class="bg-lime-300 px-2 py-1 text-center">C期間</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="px-2 py-1">スイート</th>
                      <td class="bg-orange-100 px-2 py-1 text-center">7,640</td>
                      <td class="bg-sky-100 px-2 py-1 text-center">8,400</td>
                      <td class="bg-lime-100 px-2 py-1 text-center">9,240</td>
                    </tr>
                    <tr>
                      <th class="px-2 py-1">コンフォート</th>
                      <td class="bg-orange-100 px-2 py-1 text-center">5,090</td>
                      <td class="bg-sky-100 px-2 py-1 text-center">5,600</td>
                      <td class="bg-lime-100 px-2 py-1 text-center">6,160</td>
                    </tr>
                    <tr>
                      <th class="px-2 py-1">ビューシート</th>
                      <td class="bg-orange-100 px-2 py-1 text-center">2,550</td>
                      <td class="bg-sky-100 px-2 py-1 text-center">2,800</td>
                      <td class="bg-lime-100 px-2 py-1 text-center">3,080</td>
                    </tr>
                  </tbody>
                </table>

                <ul>
                  <li class="text-xs">
                    自動車の運転者1名は車輌運賃でスタンダードにご乗船いただけます。「ドライバー差額」とはスタンダード以外でのお申し込みの場合にかかる追加代金です。
                  </li>
                </ul>
              </div>

              <div>
                <header
                  class="flex flex-wrap items-center justify-between bg-gray-100 px-4 py-2"
                >
                  <h6 class="text-sm font-semibold leading-5">学生割引</h6>
                </header>

                <table class="mb-0 mt-4 w-full text-sm">
                  <thead>
                    <tr>
                      <th class="px-2 py-1 text-left"></th>
                      <th class="bg-orange-300 px-2 py-1 text-center">A期間</th>
                      <th class="bg-sky-300 px-2 py-1 text-center">B期間</th>
                      <th class="bg-lime-300 px-2 py-1 text-center">C期間</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="px-2 py-1">スタンダード</th>
                      <td class="bg-orange-100 px-2 py-1 text-center">4,590</td>
                      <td class="bg-sky-100 px-2 py-1 text-center">5,040</td>
                      <td class="bg-lime-100 px-2 py-1 text-center">5,550</td>
                    </tr>
                  </tbody>
                </table>

                <ul>
                  <li class="text-xs">
                    所定の割引証、または学生証が必要です。
                  </li>
                </ul>
              </div>

              <div>
                <header
                  class="flex flex-wrap items-center justify-between bg-gray-100 px-4 py-2"
                >
                  <h6 class="text-sm font-semibold leading-5">その他</h6>
                </header>

                <table class="mb-0 mt-4 w-full text-sm">
                  <tbody>
                    <tr>
                      <th class="px-2 py-1">船室貸切</th>
                      <td class="px-2 py-1">
                        船室非利用客数×1旅客当たりの運賃×0.5
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="space-y-6">
              <div class="space-y-4">
                <header
                  class="flex flex-wrap items-center justify-between border-b-2 border-sky-500 px-4 py-2 text-gray-900"
                >
                  <h5 class="text-base font-semibold leading-6">
                    車輌運賃（小型車以上）
                  </h5>
                  <div class="ml-auto text-sm">
                    単位：円（消費税率・10%内税）
                  </div>
                </header>

                <table class="mb-0 mt-4 w-full text-sm">
                  <thead>
                    <tr>
                      <th class="px-2 py-1 text-left">区分</th>
                      <th class="bg-orange-300 px-2 py-1 text-center">A期間</th>
                      <th class="bg-sky-300 px-2 py-1 text-center">B期間</th>
                      <th class="bg-lime-300 px-2 py-1 text-center">C期間</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="px-2 py-1">軽自動車</th>
                      <td class="bg-orange-100 px-2 py-1 text-center">
                        19,090
                      </td>
                      <td class="bg-sky-100 px-2 py-1 text-center">21,000</td>
                      <td class="bg-lime-100 px-2 py-1 text-center">23,100</td>
                    </tr>
                    <tr>
                      <th class="px-2 py-1">6m未満</th>
                      <td class="bg-orange-100 px-2 py-1 text-center">
                        24,550
                      </td>
                      <td class="bg-sky-100 px-2 py-1 text-center">27,000</td>
                      <td class="bg-lime-100 px-2 py-1 text-center">29,700</td>
                    </tr>
                    <tr>
                      <th class="px-2 py-1">6m以上</th>
                      <td colspan="3" class="px-2 py-1 text-center text-xs">
                        <a
                          href="https://www.tsugarukaikyo.co.jp/fare/fare_route5/#fuel_price"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          津軽海峡フェリー公式サイト
                          <ArrowTopRightOnSquareIcon
                            class="inline-block size-4"
                          />
                        </a>
                        をご確認ください
                      </td>
                    </tr>
                  </tbody>
                </table>

                <ul class="text-xs">
                  <li>
                    車輌運賃には運転手1名分のスタンダード運賃が含まれております。同乗者様に関しましては、別途旅客運賃が人数分必要となります。
                  </li>
                  <li>車輌の長さは、積荷を含む全長とします。</li>
                  <li>
                    軽自動車とは、排気量660cc以下で車長4m未満の車輌（自動車検査証の自動車種別に「軽自動車」と記載された車輌）を指します。ただし、けん引や積荷のはみ出し等により規格を超える車長等になった場合には、車長に応じた運賃を適用いたします。
                  </li>
                  <li>
                    車輌の幅が積荷を含んで2.5mを超える場合は、その超える幅25cmごとに１割運賃が加算されます。
                  </li>
                  <li>
                    けん引自動車は連結した状態における全長の運賃を適用いたします。
                  </li>
                  <li>
                    キャタピラ、ロードローラー、危険物（火薬類を除く）を積載した車輌は運賃が2倍となります。また、危険物（火薬類に限る）を積載した車輌は、運賃が4倍となります。ただし、積載できない場合もありますので事前にお問い合わせください。
                  </li>
                  <li>
                    車輌運賃割引･割増後の端数処理については、100円未満の端数は50円以上切り上げ、50円未満切り捨てとなります。
                  </li>
                </ul>
              </div>

              <div class="space-y-4">
                <header
                  class="flex flex-wrap items-center justify-between border-b-2 border-sky-500 px-4 py-2 text-gray-900"
                >
                  <h5 class="text-base font-semibold leading-6">
                    特殊手荷物運賃
                  </h5>
                  <div class="ml-auto text-sm">
                    単位：円（消費税率・10%内税）
                  </div>
                </header>

                <table class="mb-0 mt-4 w-full text-sm">
                  <thead>
                    <tr>
                      <th class="px-2 py-1 text-left">区分</th>
                      <th class="bg-orange-300 px-2 py-1 text-center">A期間</th>
                      <th class="bg-sky-300 px-2 py-1 text-center">B期間</th>
                      <th class="bg-lime-300 px-2 py-1 text-center">C期間</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="px-2 py-1">自転車</th>
                      <td class="bg-orange-100 px-2 py-1 text-center">2,730</td>
                      <td class="bg-sky-100 px-2 py-1 text-center">3,000</td>
                      <td class="bg-lime-100 px-2 py-1 text-center">3,300</td>
                    </tr>
                    <tr>
                      <th class="px-2 py-1">
                        原動機付自転車
                        <span class="text-xs">（125cc以下）</span>
                      </th>
                      <td class="bg-orange-100 px-2 py-1 text-center">5,450</td>
                      <td class="bg-sky-100 px-2 py-1 text-center">6,000</td>
                      <td class="bg-lime-100 px-2 py-1 text-center">6,600</td>
                    </tr>
                    <tr>
                      <th class="px-2 py-1">
                        バイク
                        <span class="text-xs">（750cc未満）</span>
                      </th>
                      <td class="bg-orange-100 px-2 py-1 text-center">7,270</td>
                      <td class="bg-sky-100 px-2 py-1 text-center">8,000</td>
                      <td class="bg-lime-100 px-2 py-1 text-center">8,800</td>
                    </tr>
                    <tr>
                      <th class="px-2 py-1">
                        バイク
                        <span class="text-xs">（750cc以上）</span>
                      </th>
                      <td class="bg-orange-100 px-2 py-1 text-center">9,090</td>
                      <td class="bg-sky-100 px-2 py-1 text-center">10,000</td>
                      <td class="bg-lime-100 px-2 py-1 text-center">11,000</td>
                    </tr>
                    <tr>
                      <th class="px-2 py-1">サイドカー・トライク</th>
                      <td class="bg-orange-100 px-2 py-1 text-center">
                        16,820
                      </td>
                      <td class="bg-sky-100 px-2 py-1 text-center">18,500</td>
                      <td class="bg-lime-100 px-2 py-1 text-center">20,350</td>
                    </tr>
                  </tbody>
                </table>

                <ul class="text-xs">
                  <li>
                    屋根付及び側車付きの自動二輪、トライクは特殊手荷物
                    サイドカー・トライク運賃を適用いたします。
                  </li>
                </ul>
              </div>

              <div class="space-y-4">
                <header
                  class="flex flex-wrap items-center justify-between border-b-2 border-sky-500 px-4 py-2 text-gray-900"
                >
                  <h5 class="text-base font-semibold leading-6">
                    その他運賃・料金
                  </h5>
                  <div class="ml-auto text-sm">
                    単位：円（消費税率・10%内税）
                  </div>
                </header>

                <table class="mb-0 mt-4 w-full text-sm">
                  <tbody>
                    <tr>
                      <th class="px-2 py-1">
                        受託手荷物 <span class="text-xs">（30kg以下）</span>
                      </th>
                      <td class="px-2 py-1">1,200</td>
                    </tr>
                    <tr>
                      <th class="px-2 py-1">
                        小荷物 <span class="text-xs">（10kg以下）</span>
                      </th>
                      <td class="px-2 py-1">1,000</td>
                    </tr>
                    <tr>
                      <th class="px-2 py-1">
                        小荷物
                        <span class="text-xs">（10kgを超え20kg以下）</span>
                      </th>
                      <td class="px-2 py-1">1,200</td>
                    </tr>
                    <tr>
                      <th class="px-2 py-1">
                        小荷物
                        <span class="text-xs">（20kgを超え30kg以下）</span>
                      </th>
                      <td class="px-2 py-1">1,400</td>
                    </tr>
                  </tbody>
                </table>

                <ul>
                  <li class="text-xs">
                    「受託手荷物」の大きさは3辺の長さの和が2メートル以下かつ30kg以下のものとなります。
                  </li>
                  <li class="text-xs">
                    「小荷物」は3辺の長さの和が2メートル以下かつ30kg以下の物品のみであり、1回につき5個までとなります。
                  </li>
                </ul>

                <table class="mb-0 mt-4 w-full text-sm">
                  <tbody>
                    <tr>
                      <th class="px-2 py-1">ドッグルーム利用料</th>
                      <td class="px-2 py-1">1,700</td>
                    </tr>
                    <tr>
                      <th class="px-2 py-1">プライベートドッグルーム利用料</th>
                      <td class="px-2 py-1">20,500</td>
                    </tr>
                  </tbody>
                </table>

                <ul>
                  <li class="text-xs">
                    ドッグルーム、プライベートドッグルームは、部屋使用料のほか、車輌・旅客運賃が別途必要です。
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="mt-4 space-y-4">
            <header
              class="flex flex-wrap items-center justify-between border-b-2 border-sky-500 px-4 py-2 text-gray-900"
            >
              <h5 class="text-base font-semibold leading-6">各種割引</h5>
            </header>

            <div>
              <header
                class="flex flex-wrap items-center justify-between bg-gray-100 px-4 py-2"
              >
                <h6 class="text-sm font-semibold leading-5">
                  車輌・旅客運賃の往復割引
                </h6>
              </header>
              <div>
                <p>
                  同一航路で事前に往復で購入いただいた場合、往路乗船日より14日以内の復路運賃が1割引となります。
                </p>
                <ul>
                  <li class="text-xs">
                    特殊手荷物運賃は割引を適用いたしません。
                  </li>
                  <li class="text-xs">
                    インターネットによる予約とお電話にて成立した往復分の予約（例：往路を電話予約、復路をインターネット予約）の場合は往復割引の適用はいたしません。
                  </li>
                  <li class="text-xs">
                    復路乗船券は往路乗船日より14日を過ぎますと無効となります(払い戻し不可)。
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <header
                class="flex flex-wrap items-center justify-between bg-gray-100 px-4 py-2"
              >
                <h6 class="text-sm font-semibold leading-5">
                  インターネット予約割引
                </h6>
              </header>
              <div>
                <p>
                  インターネット予約なら1割引となります。
                  乗船日の3ヶ月前から24時間お好きな時間に予約できます。
                </p>
              </div>
            </div>

            <div>
              <header
                class="flex flex-wrap items-center justify-between bg-gray-100 px-4 py-2"
              >
                <h6 class="text-sm font-semibold leading-5">旅客運賃割引</h6>
              </header>

              <div>
                <p>
                  団体割引（15名以上）、学生割引、身体障がい者、知的障がい者及び精神障がい者割引があります。
                  詳細は
                  <a
                    href="https://www.tsugarukaikyo.co.jp/fare/fare_route5/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    津軽海峡フェリー公式サイト
                    <ArrowTopRightOnSquareIcon class="inline-block size-4" />
                  </a>
                  をご確認ください。
                </p>
                <ul>
                  <li class="text-xs">各項を重複しての割引はいたしません。</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <header
              class="flex flex-wrap items-center justify-between border-b-2 border-sky-500 px-4 py-2 text-gray-900"
            >
              <h5 class="text-base font-semibold leading-6">免責</h5>
            </header>

            <ul>
              <li class="text-sm">
                記載の運賃・料金及び割引は、ページ作成時点のものです。予約時の運賃・料金が優先されます。
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h4
          class="bg-lime-500 px-4 py-2 text-base font-semibold leading-6 text-white"
        >
          宮古・八戸発着（宮蘭航路）
        </h4>
        <div class="py-4">運航休止中</div>
      </section>
    </div>
  </PageSection>
</template>

<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
import { cdate } from 'cdate';

import { priceScheduleSchema } from '~/schemas/price_schedule_schema';
import type { PriceSchedule } from '~/schemas/price_schedule_schema';

const config = useRuntimeConfig();

// refs
const priceSchedules = ref({
  loading: true,
  data: [] as PriceSchedule[],
});

try {
  priceSchedules.value.loading = true;
  const { data } = await useLazyFetch(
    config.public.SEIRAN_PRICE_SCHEDULE_API_URL
  );
  priceSchedules.value.data = priceScheduleSchema.array().parse(data.value);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
} finally {
  priceSchedules.value.loading = false;
}

const maxPriceScheduleEndDate = computed(() => {
  if (priceSchedules.value.data.length === 0) {
    return cdate(0);
  }

  return cdate(
    Math.max.apply(
      null,
      priceSchedules.value.data.map((priceSchedule) => {
        return priceSchedule.endDate.getTime();
      })
    )
  ).endOf('day');
});

const calendarStartDate = computed(() => {
  const date = cdate().prev('month').startOf('month');
  return date;
});

const calendarEndDate = computed(() => {
  const date = cdate().add(5, 'month').endOf('month');
  return date > maxPriceScheduleEndDate.value
    ? maxPriceScheduleEndDate.value
    : date;
});
</script>
