import React from 'react'
import Link from 'gatsby-link'

import Icon from 'react-fa'

const IndexPage = () => (
  <div id="Top" className="row">
    <main className="col-12" role="main">
      <h1>室蘭フェリーターミナル</h1>
      <h2 id="Schedule">時刻表</h2>
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>
            <Icon name="ship" />室蘭→宮古
          </h3>
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
                  <td>シルバークィーン</td>
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
            <Icon name="ship" />宮古→室蘭
          </h3>
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
                  <td>シルバークィーン</td>
                  <td>08:00</td>
                  <td>18:00</td>
                  <td>約10時間</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <h2 id="Access">アクセス</h2>
      <div className="ggmap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4612.725104020737!2d140.97539344487194!3d42.32534525999099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9fda9bd99e3641%3A0xe4a872684854469d!2z5a6k6Jit44OV44Kn44Oq44O844K_44O844Of44OK44Or!5e0!3m2!1sja!2sjp!4v1521888728832"
          style={{ border: 0, margin: 'auto' }}
          allowfullscreen
        />
      </div>
    </main>
  </div>
)

export default IndexPage
