import React from 'react'
import Link from 'gatsby-link'

import Icon from 'react-fa'

import { JSONLD, Generic } from 'react-structured-data'

const IndexPage = () => (
  <div id="Top" className="row">
    <main className="col-12" role="main">
      <h1>室蘭フェリーターミナル</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <figure className="figure">
            <img
              src="/images/ferryterminal.jpg"
              className="rounded figure-img img-fluid mx-auto d-block"
              alt="室蘭フェリーターミナル"
            />
            <figcaption className="figure-caption text-right">
              室蘭フェリーターミナルの写真 (<a
                href="http://creativecommons.org/licenses/by/4.0/"
                target="_blank"
              >
                CC-by
              </a>{' '}
              室蘭市)
            </figcaption>
          </figure>
        </div>
        <div className="col-12 col-md-6">
          <div className="ggmap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4612.725104020737!2d140.97539344487194!3d42.32534525999099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9fda9bd99e3641%3A0xe4a872684854469d!2z5a6k6Jit44OV44Kn44Oq44O844K_44O844Of44OK44Or!5e0!3m2!1sja!2sjp!4v1521888728832"
              style={{ border: 0, margin: 'auto' }}
              className="rounded"
              allowfullscreen
            />
          </div>
        </div>
      </div>
      <h2 id="Access">アクセス</h2>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <h3>住所</h3>
          <p>
            〒051-0023<br />
            北海道室蘭市⼊江町１番地５０
          </p>
          <h3>
            <Icon name="map-pin" />MAPCODE
          </h3>
          <p>159 252 650*88</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <h3>最寄り</h3>
          <ul>
            <li>
              <Icon name="bus" />バス:{' '}
              <a
                href="https://muroran.bus-navi.yk-lab.net/stops/342ba8adefd24d0ba6c77d17d90cd4e7"
                target="_blank"
              >
                道南バス「室蘭港」停留所
              </a>
              <ul>
                <li>徒歩約10分</li>
              </ul>
            </li>
            <li>
              <Icon name="train" />JR: 室蘭駅
              <ul>
                <li>徒歩約15分</li>
              </ul>
            </li>
            <li>
              <Icon name="car" />高速道路: 室蘭IC
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4">
          <h3>
            <Icon name="car" />主要都市からの所要時間
          </h3>
          <ul>
            <li>札幌から: 約2時間 (道央自動車道)</li>
            <li>新千歳空港から: 約1時間20分 (道央自動車道)</li>
            <li>苫小牧から: 約1時間15分 (道央自動車道)</li>
            <li>函館から: 約3時間 (道央自動車道)</li>
          </ul>
        </div>
      </div>
    </main>
    <JSONLD>
      <Generic
        type="place"
        jsonldtype="Place"
        schema={{
          name: '室蘭フェリーターミナル',
        }}
      >
        <Generic
          type="address"
          jsonldtype="PostalAddress"
          schema={{
            addressLocality: '室蘭市',
            addressRegion: '北海道',
            postalCode: '051-0023',
            streetAddress: '⼊江町１番地５０',
          }}
        />
      </Generic>
    </JSONLD>
  </div>
)

export default IndexPage
