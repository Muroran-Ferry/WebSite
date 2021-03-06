import React from 'react'
import Helmet from 'react-helmet'

import { siteMetadata } from '../../../gatsby-config'

import AdSense from 'react-adsense'

import Header from '../Header'
import Footer from '../Footer'
import './mybootstrap.scss'

export default ({ children, location }) => (
  <div>
    <Helmet
      title="室蘭フェリーターミナル"
      meta={[
        {
          name: 'description',
          content: 'ある市民による室蘭フェリーターミナルの情報サイト',
        },
        { name: 'keywords', content: '室蘭, フェリー, ターミナル' },
      ]}
    >
      <script
        async
        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
    </Helmet>
    <Header title={siteMetadata.title} location={location} />
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 pt-5 px-4">{children}</div>
      </div>
    </div>
    <div className="ads">
      <AdSense.Google
        client="ca-pub-7311832303084031"
        slot="6077741587"
        style={{ display: 'block', textAlign: 'center' }}
      />
    </div>
    <Footer author={siteMetadata.author} />
    <script
      src="https://code.jquery.com/jquery-3.4.0.slim.min.js"
      integrity="sha256-ZaXnYkHGqIhqTbJ6MB4l9Frs/r7U4jlx7ir8PJYBqbI="
      crossOrigin="anonymous"
    />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossOrigin="anonymous"
    />
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossOrigin="anonymous"
    />
  </div>
)
