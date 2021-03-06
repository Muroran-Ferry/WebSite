import React from 'react'

import Icon from 'react-fa'

import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel,
} from 'react-accordion-with-header'

const TimetablePage = () => (
  <main id="Timetable" className="col-12" role="main">
    <h1>
      <Icon name="clock" />
      時刻表
    </h1>
    <AccordionWithHeader firstOpen multipleOkay className="accordion">
      <AccordionNode className="card" key="0">
        <AccordionHeader
          className="card-header"
          horizontalAlignment="left"
          verticalAlignment="bottom"
        >
          <h2 style={{ margin: '0px' }}>宮蘭航路</h2>
        </AccordionHeader>
        <AccordionPanel>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <ul>
                  <li>港間距離: 326km</li>
                  <li>航行時間: 約10時間</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <h3>
                  <Icon name="ship" />
                  室蘭→八戸→宮古
                </h3>
                <div className="table-responsive">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr className="">
                        <th scope="col">船舶</th>
                        <th scope="col">室蘭発 (日曜運休)</th>
                        <th scope="col">八戸着</th>
                        <th scope="col">八戸発 (月曜運休)</th>
                        <th scope="col">宮古着</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a
                            href="http://www.silverferry.jp/ship_guide/#silverQueen"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            シルバークィーン
                          </a>
                        </td>
                        <td>20:50</td>
                        <td>翌 03:30</td>
                        <td>04:00</td>
                        <td>翌 07:55</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <h3>
                  <Icon name="ship" />
                  宮古→室蘭
                </h3>
                <div className="table-responsive">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr className="">
                        <th scope="col">船舶</th>
                        <th scope="col">宮古発 (月曜運休)</th>
                        <th scope="col">室蘭着</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a
                            href="http://www.silverferry.jp/ship_guide/#silverQueen"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            シルバークィーン
                          </a>
                        </td>
                        <td>08:00</td>
                        <td>18:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </AccordionPanel>
      </AccordionNode>
    </AccordionWithHeader>
  </main>
)

export default TimetablePage
