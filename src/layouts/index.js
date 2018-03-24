import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import AdSense from 'react-adsense'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './mybootstrap.scss'

const TemplateWrapper = ({ children }) => (
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
    <Header />
    <div className="container-fluid">{children()}</div>
    <div className="ads">
      <AdSense.Google
        client="ca-pub-7311832303084031"
        slot="6077741587"
        style={{ display: 'block', textAlign: 'center' }}
      />
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
