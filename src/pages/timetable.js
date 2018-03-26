import React from 'react'
import Link from 'gatsby-link'

import Icon from 'react-fa'

const TimetablePage = () => (
  <div id="Timetable" className="row">
    <main className="col-12" role="main">
      <h1>
        <Icon name="Clock" />時刻表
      </h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>
            <Icon name="ship" />室蘭→宮古 (港間距離: 326km)
          </h3>
          <p>2018年6月22日就航</p>
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr className="">
                  <th scope="col">船舶</th>
                  <th scope="col">室蘭発</th>
                  <th scope="col">宮古着</th>
                  <th scope="col">航行時間</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="http://www.silverferry.jp/ship_guide/#silverQueen"
                      target="_blank"
                    >
                      シルバークィーン
                    </a>
                  </td>
                  <td>20:00</td>
                  <td>翌 06:00</td>
                  <td>約10時間</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h3>
            <Icon name="ship" />宮古→室蘭 (港間距離: 326km)
          </h3>
          <p>2018年6月22日就航</p>
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr className="">
                  <th scope="col">船舶</th>
                  <th scope="col">宮古発</th>
                  <th scope="col">室蘭着</th>
                  <th scope="col">航行時間</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="http://www.silverferry.jp/ship_guide/#silverQueen"
                      target="_blank"
                    >
                      シルバークィーン
                    </a>
                  </td>
                  <td>08:00</td>
                  <td>18:00</td>
                  <td>約10時間</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>
)

export default TimetablePage
