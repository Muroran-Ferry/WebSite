import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { siteMetadata } from '../../gatsby-config'

import AdSense from 'react-adsense'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './mybootstrap.scss'
import bootstrap from 'bootstrap'

class TemplateWrapper extends React.Component {
  render() {
    const { location, children } = this.props
    return (
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
        <Header title={siteMetadata.title} {...this.props} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 pt-5 px-4">{children()}</div>
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
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
