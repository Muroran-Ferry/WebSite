import TemplateWrapper from '../components/Layout'

import React from 'react'

import Icon from 'react-fa'

import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel,
} from 'react-accordion-with-header'

export default props => (
  <TemplateWrapper location={props.location}>
    <main id="Reservation" className="col-12" role="main">
      <h1>
        <Icon name="calendar" />
        予約方法
      </h1>
      <AccordionWithHeader firstOpen multipleOkay className="accordion">
        <AccordionNode className="card" key="0">
          <AccordionHeader
            className="card-header"
            horizontalAlignment="left"
            verticalAlignment="bottom"
          >
            <h2 style={{ margin: '0px' }}>
              宮蘭航路
              <div className="lead">2018年6月22日就航！</div>
            </h2>
          </AccordionHeader>
          <AccordionPanel>
            <div className="card-body">
              <div className="row">
                <section className="col-12 col-md-6">
                  <header>
                    <h3>一般旅客，乗用車</h3>
                  </header>
                  <article>
                    <dl>
                      <dt>予約受付開始</dt>
                      <dd>
                        乗船日の2ヶ月前 午前9時から
                        <div className="text-muted">
                          例:
                          2018年6月22日ご乗船の場合，2018年4月22日午前9時より
                        </div>
                      </dd>
                    </dl>
                  </article>
                </section>
                <section className="col-12 col-md-6">
                  <header>
                    <h3>団体利用</h3>
                  </header>
                  <article>
                    <dl>
                      <dt>団体</dt>
                      <dd>
                        ドライバー、添乗員、６歳未満のお子様を除く旅客１５名様以上
                      </dd>
                      <dt>予約受付開始</dt>
                      <dd>
                        原則ご乗船日の１年前から
                        <div className="text-muted">
                          ただし，2018年1月9日9時以降
                        </div>
                      </dd>
                      <dt>予約センター</dt>
                      <dd>
                        <ul>
                          <li>
                            電話番号: <a href="tel:0120539468">0120-539-468</a>
                          </li>
                          <li>担当: 川崎近海汽船株式会社 団体予約担当</li>
                          <li>営業時間: 平日 09:00～17:00</li>
                        </ul>
                      </dd>
                    </dl>
                  </article>
                </section>
              </div>
            </div>
          </AccordionPanel>
        </AccordionNode>
      </AccordionWithHeader>
    </main>
  </TemplateWrapper>
)
