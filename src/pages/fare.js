import React from 'react'

import Icon from 'react-fa'

import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel,
} from 'react-accordion-with-header'

const FarePage = () => (
  <main id="Fare" className="col-12" role="main">
    <h1>
      <Icon name="yen-sign" />
      運賃
    </h1>
    <AccordionWithHeader firstOpen multipleOkay className="accordion">
      <AccordionNode className="card" key="0">
        <AccordionHeader
          className="card-header"
          horizontalAlignment="left"
          verticalAlignment="bottom"
        >
          <h2 style={{ margin: '0px' }}>宮蘭航路 (室蘭〜宮古)</h2>
        </AccordionHeader>
        <AccordionPanel>
          <section>
            <div className="card-body">
              <div className="row justify-content-center">
                <section className="col-12 col-lg-6">
                  <header>
                    <h2>旅客運賃 (片道・税込)</h2>
                  </header>
                  <article>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className="thead-dark">
                          <tr>
                            <th colSpan="2" scope="col">
                              旅客運賃
                            </th>
                            <th scope="col">一般</th>
                            <th scope="col">団体</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th rowSpan="4" scope="row">
                              大人 (中学生以上)
                            </th>
                            <th scope="row">特等</th>
                            <td>¥15,000</td>
                            <td>¥13,500</td>
                          </tr>
                          <tr>
                            <th scope="row">1等</th>
                            <td>¥12,000</td>
                            <td>¥10,800</td>
                          </tr>
                          <tr>
                            <th scope="row">2等寝台B</th>
                            <td>¥8,000</td>
                            <td>¥7,200</td>
                          </tr>
                          <tr>
                            <th scope="row">2等</th>
                            <td>¥6,000</td>
                            <td>¥5,400</td>
                          </tr>
                          <tr>
                            <th rowSpan="4" scope="row">
                              小児 (小学生)
                            </th>
                            <th scope="row">特等</th>
                            <td>¥7,500</td>
                            <td>¥6,750</td>
                          </tr>
                          <tr>
                            <th scope="row">1等</th>
                            <td>¥6,000</td>
                            <td>¥5,400</td>
                          </tr>
                          <tr>
                            <th scope="row">2等寝台B</th>
                            <td>¥4,000</td>
                            <td>¥3,600</td>
                          </tr>
                          <tr>
                            <th scope="row">2等</th>
                            <td>¥3,000</td>
                            <td>¥2,700</td>
                          </tr>
                          <tr>
                            <th rowSpan="2" scope="row">
                              学生 (小学生は除く)
                            </th>
                            <th scope="row">2等寝台B</th>
                            <td>¥6,800</td>
                            <td>¥6,000</td>
                          </tr>
                          <tr>
                            <th scope="row">2等</th>
                            <td>¥4,800</td>
                            <td>¥4,200</td>
                          </tr>
                          <tr>
                            <th scope="row" colSpan="2">
                              船室貸切
                            </th>
                            <td colSpan="2">船室非利用人数×1人当運賃×50％</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ul>
                      <li>車なしでも乗船可</li>
                      <li>
                        学生は、乗船窓口で学生証の提示がない場合、大人扱い
                      </li>
                      <li>
                        団体は15名様以上（運転者・添乗員・6歳未満を除く）で利用する場合
                      </li>
                    </ul>
                  </article>
                </section>
                <section className="col-12 col-lg-6 row">
                  <div className="col-12 col-md-6 col-lg-12">
                    <header>
                      <h2>特殊手荷物運賃（片道・税込）</h2>
                    </header>
                    <article>
                      <h3>自転車・オートバイ運賃</h3>
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <th scope="row">自転車</th>
                              <td>¥2,600</td>
                            </tr>
                            <tr>
                              <th scope="row">125cc以下</th>
                              <td>¥5,200</td>
                            </tr>
                            <tr>
                              <th scope="row">125cc超〜750cc未満</th>
                              <td>¥7,300</td>
                            </tr>
                            <tr>
                              <th scope="row">750cc以上</th>
                              <td>¥9,400</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <ul>
                        <li>旅客運賃は含まない</li>
                      </ul>
                    </article>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12">
                    <h2>車両運賃 (片道・税込)</h2>
                    <h3>乗用車運賃</h3>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th scope="row">4m未満</th>
                            <td>¥20,800</td>
                          </tr>
                          <tr>
                            <th scope="row">4m以上〜5m未満</th>
                            <td>¥26,000</td>
                          </tr>
                          <tr>
                            <th scope="row">5m以上〜6m未満</th>
                            <td>¥31,200</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ul>
                      <li>運転者1名分の2等運賃を含む</li>
                      <li>
                        特等・1等・2等寝台を使用する場合は2等運賃との差額が加算となる
                        <ul>
                          <li>特等: +¥9,000</li>
                          <li>1等: +¥6,000</li>
                          <li>2等寝台: +¥2,000</li>
                        </ul>
                      </li>
                    </ul>
                    <h3>トラック運賃</h3>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th scope="row">6m以上〜7m未満</th>
                            <td>¥40,700</td>
                          </tr>
                          <tr>
                            <th scope="row">7m以上〜8m未満</th>
                            <td>¥46,500</td>
                          </tr>
                          <tr>
                            <th scope="row">8m以上〜9m未満</th>
                            <td>¥52,300</td>
                          </tr>
                          <tr>
                            <th scope="row">9m以上〜10m未満</th>
                            <td>¥58,100</td>
                          </tr>
                          <tr>
                            <th scope="row">10m以上〜11m未満</th>
                            <td>¥63,900</td>
                          </tr>
                          <tr>
                            <th scope="row">11m以上〜12m未満</th>
                            <td>¥69,700</td>
                          </tr>
                          <tr>
                            <th scope="row">12m以上〜13m未満</th>
                            <td>¥75,500</td>
                          </tr>
                          <tr>
                            <th scope="row">13m以上〜14m未満</th>
                            <td>¥81,300</td>
                          </tr>
                          <tr>
                            <th scope="row">14m以上〜15m未満</th>
                            <td>¥87,100</td>
                          </tr>
                          <tr>
                            <th scope="row">15m以上〜16m未満</th>
                            <td>¥92,900</td>
                          </tr>
                          <tr>
                            <th scope="row">16m以上〜17m未満</th>
                            <td>¥98,700</td>
                          </tr>
                          <tr>
                            <th scope="row">17m以上〜18m未満</th>
                            <td>¥104,500</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ul>
                      <li>運転者1名分の2等運賃を含む</li>
                      <li>6m未満の貨物車両は乗用車と同一運賃となる</li>
                      <li>
                        燃料油価格の変動に応じ、燃料調整金が加算される
                        <ul>
                          <li>
                            2018年10月1日〜2018年12月31日: 運賃に調整金を14%加算
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </AccordionPanel>
      </AccordionNode>
    </AccordionWithHeader>
    <AccordionWithHeader multipleOkay className="accordion">
      <AccordionNode className="card" key="1">
        <AccordionHeader
          className="card-header"
          horizontalAlignment="left"
          verticalAlignment="bottom"
        >
          <h2 style={{ margin: '0px' }}>宮蘭航路 (室蘭→八戸)</h2>
        </AccordionHeader>
        <AccordionPanel>
          <section>
            <div className="card-body">
              <div className="row justify-content-center">
                <section className="col-12 col-lg-6">
                  <div>
                    <header>
                      <h2>旅客運賃 (片道・税込)</h2>
                    </header>
                    <article>
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead className="thead-dark">
                            <tr>
                              <th colSpan="2" scope="col">
                                旅客運賃
                              </th>
                              <th scope="col">一般</th>
                              <th scope="col">団体</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th rowSpan="4" scope="row">
                                大人 (中学生以上)
                              </th>
                              <th scope="row">特等</th>
                              <td>¥11,750</td>
                              <td />
                            </tr>
                            <tr>
                              <th scope="row">1等</th>
                              <td>¥9,400</td>
                              <td />
                            </tr>
                            <tr>
                              <th scope="row">2等寝台B</th>
                              <td>¥6,000</td>
                              <td />
                            </tr>
                            <tr>
                              <th scope="row">2等</th>
                              <td>¥4,700</td>
                              <td />
                            </tr>
                            <tr>
                              <th rowSpan="4" scope="row">
                                小児 (小学生)
                              </th>
                              <th scope="row">特等</th>
                              <td>¥5,880</td>
                              <td />
                            </tr>
                            <tr>
                              <th scope="row">1等</th>
                              <td>¥4,700</td>
                              <td />
                            </tr>
                            <tr>
                              <th scope="row">2等寝台B</th>
                              <td>¥3,000</td>
                              <td />
                            </tr>
                            <tr>
                              <th scope="row">2等</th>
                              <td>¥2,350</td>
                              <td />
                            </tr>
                            <tr>
                              <th rowSpan="2" scope="row">
                                学生 (小学生は除く)
                              </th>
                              <th scope="row">2等寝台B</th>
                              <td>¥5,060</td>
                              <td />
                            </tr>
                            <tr>
                              <th scope="row">2等</th>
                              <td>¥3,760</td>
                              <td />
                            </tr>
                            <tr>
                              <th scope="row" colSpan="2">
                                船室貸切
                              </th>
                              <td colSpan="2">船室非利用人数×1人当運賃×50％</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <ul>
                        <li>車なしでも乗船可</li>
                        <li>
                          学生は、乗船窓口で学生証の提示がない場合、大人扱い
                        </li>
                        <li>
                          団体は15名様以上（運転者・添乗員・6歳未満を除く）で利用する場合
                        </li>
                      </ul>
                    </article>
                  </div>
                  <div>
                    <header>
                      <h2>手小荷物運賃（片道・税込）</h2>
                    </header>
                    <article>
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <th scope="row">受託手荷物</th>
                              <td>¥1,200</td>
                            </tr>
                            <tr>
                              <th scope="row">小荷物10kg</th>
                              <td>¥1,200</td>
                            </tr>
                            <tr>
                              <th scope="row">小荷物20kg</th>
                              <td>¥1,400</td>
                            </tr>
                            <tr>
                              <th scope="row">小荷物30kg</th>
                              <td>¥1,600</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <ul>
                        <li>
                          受託手荷物は3辺の長さの和が2メートル以下で、かつ、重量が30キログラム以下の物品
                        </li>
                        <li>
                          小荷物は3辺の長さの和が2メートル以下で、かつ、重量が30キログラム以下の物品
                          (運送委託)
                        </li>
                      </ul>
                    </article>
                  </div>
                </section>
                <section className="col-12 col-lg-6 row">
                  <div className="col-12 col-md-6 col-lg-12">
                    <header>
                      <h2>特殊手荷物運賃（片道・税込）</h2>
                    </header>
                    <article>
                      <h3>自転車・オートバイ運賃</h3>
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <th scope="row">自転車</th>
                              <td>¥2,400</td>
                            </tr>
                            <tr>
                              <th scope="row">125cc以下</th>
                              <td>¥4,800</td>
                            </tr>
                            <tr>
                              <th scope="row">125cc超〜750cc未満</th>
                              <td>¥6,800</td>
                            </tr>
                            <tr>
                              <th scope="row">750cc以上</th>
                              <td>¥8,800</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <ul>
                        <li>旅客運賃は含まない</li>
                      </ul>
                    </article>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12">
                    <h2>車両運賃 (片道・税込)</h2>
                    <h3>乗用車運賃</h3>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th scope="row">4m未満</th>
                            <td>¥19,000</td>
                          </tr>
                          <tr>
                            <th scope="row">4m以上〜5m未満</th>
                            <td>¥24,000</td>
                          </tr>
                          <tr>
                            <th scope="row">5m以上〜6m未満</th>
                            <td>¥29,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ul>
                      <li>運転者1名分の2等運賃を含む</li>
                      <li>
                        特等・1等・2等寝台Bを使用する場合は2等運賃との差額が加算となる
                        <ul>
                          <li>特等: +¥7,050</li>
                          <li>1等: +¥4,700</li>
                          <li>2等寝台: +¥1,300</li>
                        </ul>
                      </li>
                    </ul>
                    <h3>トラック運賃</h3>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th scope="row">6m以上〜7m未満</th>
                            <td>¥31,400</td>
                          </tr>
                          <tr>
                            <th scope="row">7m以上〜8m未満</th>
                            <td>¥36,560</td>
                          </tr>
                          <tr>
                            <th scope="row">8m以上〜9m未満</th>
                            <td>¥41,720</td>
                          </tr>
                          <tr>
                            <th scope="row">9m以上〜10m未満</th>
                            <td>¥46,910</td>
                          </tr>
                          <tr>
                            <th scope="row">10m以上〜11m未満</th>
                            <td>¥52,070</td>
                          </tr>
                          <tr>
                            <th scope="row">11m以上〜12m未満</th>
                            <td>¥57,230</td>
                          </tr>
                          <tr>
                            <th scope="row">12m以上〜13m未満</th>
                            <td>¥62,390</td>
                          </tr>
                          <tr>
                            <th scope="row">13m以上〜14m未満</th>
                            <td>¥67,550</td>
                          </tr>
                          <tr>
                            <th scope="row">14m以上〜15m未満</th>
                            <td>¥72,710</td>
                          </tr>
                          <tr>
                            <th scope="row">15m以上〜16m未満</th>
                            <td>¥77,870</td>
                          </tr>
                          <tr>
                            <th scope="row">16m以上〜17m未満</th>
                            <td>¥83,030</td>
                          </tr>
                          <tr>
                            <th scope="row">17m以上〜18m未満</th>
                            <td>¥88,190</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ul>
                      <li>運転者1名分の2等運賃を含む</li>
                      <li>6m未満の貨物車両は乗用車と同一運賃となる</li>
                      <li>
                        燃料油価格の変動に応じ、燃料調整金が加算される
                        <ul>
                          <li>
                            2018年10月6日～2018年12月31日: 運賃に調整金を14%加算
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </AccordionPanel>
      </AccordionNode>
    </AccordionWithHeader>
    <AccordionWithHeader multipleOkay className="accordion">
      <AccordionNode className="card" key="1">
        <AccordionHeader
          className="card-header"
          horizontalAlignment="left"
          verticalAlignment="bottom"
        >
          <h2 style={{ margin: '0px' }}>宮蘭航路 (八戸→宮古)</h2>
        </AccordionHeader>
        <AccordionPanel>
          <section>
            <div className="card-body">
              <div className="row justify-content-center">
                <section className="col-12 col-lg-6">
                  <header>
                    <h2>旅客運賃 (片道・税込)</h2>
                  </header>
                  <article>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className="thead-dark">
                          <tr>
                            <th colSpan="2" scope="col">
                              旅客運賃
                            </th>
                            <th scope="col">一般</th>
                            <th scope="col">団体</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th rowSpan="4" scope="row">
                              大人 (中学生以上)
                            </th>
                            <th scope="row">特等</th>
                            <td>¥7,750</td>
                            <td />
                          </tr>
                          <tr>
                            <th scope="row">1等</th>
                            <td>¥6,200</td>
                            <td />
                          </tr>
                          <tr>
                            <th scope="row">2等寝台B</th>
                            <td>¥4,400</td>
                            <td />
                          </tr>
                          <tr>
                            <th scope="row">2等</th>
                            <td>¥3,100</td>
                            <td />
                          </tr>
                          <tr>
                            <th rowSpan="4" scope="row">
                              小児 (小学生)
                            </th>
                            <th scope="row">特等</th>
                            <td>¥3,880</td>
                            <td />
                          </tr>
                          <tr>
                            <th scope="row">1等</th>
                            <td>¥3,100</td>
                            <td />
                          </tr>
                          <tr>
                            <th scope="row">2等寝台B</th>
                            <td>¥2,200</td>
                            <td />
                          </tr>
                          <tr>
                            <th scope="row">2等</th>
                            <td>¥1,550</td>
                            <td />
                          </tr>
                          <tr>
                            <th rowSpan="2" scope="row">
                              学生 (小学生は除く)
                            </th>
                            <th scope="row">2等寝台B</th>
                            <td>¥3,780</td>
                            <td />
                          </tr>
                          <tr>
                            <th scope="row">2等</th>
                            <td>¥2,480</td>
                            <td />
                          </tr>
                          <tr>
                            <th scope="row" colSpan="2">
                              船室貸切
                            </th>
                            <td colSpan="2">船室非利用人数×1人当運賃×50％</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ul>
                      <li>車なしでも乗船可</li>
                      <li>
                        学生は、乗船窓口で学生証の提示がない場合、大人扱い
                      </li>
                      <li>
                        団体は15名様以上（運転者・添乗員・6歳未満を除く）で利用する場合
                      </li>
                    </ul>
                  </article>
                </section>
                <section className="col-12 col-lg-6 row">
                  <div className="col-12 col-md-6 col-lg-12">
                    <header>
                      <h2>特殊手荷物運賃（片道・税込）</h2>
                    </header>
                    <article>
                      <h3>自転車・オートバイ運賃</h3>
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <th scope="row">自転車</th>
                              <td>¥980</td>
                            </tr>
                            <tr>
                              <th scope="row">125cc以下</th>
                              <td>¥1,960</td>
                            </tr>
                            <tr>
                              <th scope="row">125cc超〜750cc未満</th>
                              <td>¥2,690</td>
                            </tr>
                            <tr>
                              <th scope="row">750cc以上</th>
                              <td>¥3,420</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <ul>
                        <li>旅客運賃は含まない</li>
                      </ul>
                    </article>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12">
                    <h2>車両運賃 (片道・税込)</h2>
                    <h3>乗用車運賃</h3>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th scope="row">4m未満</th>
                            <td>¥8,040</td>
                          </tr>
                          <tr>
                            <th scope="row">4m以上〜5m未満</th>
                            <td>¥9,800</td>
                          </tr>
                          <tr>
                            <th scope="row">5m以上〜6m未満</th>
                            <td>¥11,560</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ul>
                      <li>運転者1名分の2等運賃を含む</li>
                      <li>
                        特等・1等・2等寝台Bを使用する場合は2等運賃との差額が加算となる
                        <ul>
                          <li>特等: +¥4,650</li>
                          <li>1等: +¥3,100</li>
                          <li>2等寝台: +¥1,300</li>
                        </ul>
                      </li>
                    </ul>
                    <h3>トラック運賃</h3>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th scope="row">6m以上〜7m未満</th>
                            <td>¥21,510</td>
                          </tr>
                          <tr>
                            <th scope="row">7m以上〜8m未満</th>
                            <td>¥23,890</td>
                          </tr>
                          <tr>
                            <th scope="row">8m以上〜9m未満</th>
                            <td>¥26,270</td>
                          </tr>
                          <tr>
                            <th scope="row">9m以上〜10m未満</th>
                            <td>¥28,620</td>
                          </tr>
                          <tr>
                            <th scope="row">10m以上〜11m未満</th>
                            <td>¥31,000</td>
                          </tr>
                          <tr>
                            <th scope="row">11m以上〜12m未満</th>
                            <td>¥33,380</td>
                          </tr>
                          <tr>
                            <th scope="row">12m以上〜13m未満</th>
                            <td>¥35,760</td>
                          </tr>
                          <tr>
                            <th scope="row">13m以上〜14m未満</th>
                            <td>¥38,140</td>
                          </tr>
                          <tr>
                            <th scope="row">14m以上〜15m未満</th>
                            <td>¥40,520</td>
                          </tr>
                          <tr>
                            <th scope="row">15m以上〜16m未満</th>
                            <td>¥42,900</td>
                          </tr>
                          <tr>
                            <th scope="row">16m以上〜17m未満</th>
                            <td>¥45,280</td>
                          </tr>
                          <tr>
                            <th scope="row">17m以上〜18m未満</th>
                            <td>¥47,660</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ul>
                      <li>運転者1名分の2等運賃を含む</li>
                      <li>6m未満の貨物車両は乗用車と同一運賃となる</li>
                      <li>
                        燃料油価格の変動に応じ、燃料調整金が加算される
                        <ul>
                          <li>
                            2018年10月6日～2018年12月31日: 運賃に調整金を14%加算
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </AccordionPanel>
      </AccordionNode>
    </AccordionWithHeader>
  </main>
)

export default FarePage
