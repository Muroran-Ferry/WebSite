import React from 'react'
import Link from 'gatsby-link'

import Icon from 'react-fa'

const FarePage = () => (
  <div id="Top" className="row">
    <main className="col-12" role="main">
      <h1>
        <Icon name="yen-sign" />運賃
      </h1>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6">
          <h2>旅客運賃 (片道・税込)</h2>
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
                  <th scope="row">2等寝台</th>
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
                  <th scope="row">2等寝台</th>
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
                  <th scope="row">2等寝台</th>
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
            <li>学生は、乗船窓口で学生証の提示がない場合、大人扱い</li>
            <li>
              団体は15名様以上（運転者・添乗員・6歳未満を除く）で利用する場合
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-6 row">
          <div className="col-12 col-md-6 col-lg-12">
            <h2>特殊手荷物運賃（片道・税込）</h2>
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
          </div>
        </div>
        <div className="col-12 col-lg-6">
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
                <li>2018年1月6日～2018年3月31日: 運賃に調整金を10%加算</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
)

export default FarePage
