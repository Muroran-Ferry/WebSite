import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-primary justify-content-between sticky-top">
    <Link className="navbar-brand" to="/">
      室蘭フェリーターミナル
    </Link>

    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          トップ
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/#Access">
          アクセス
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/timetable/">
          時刻表
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/fare/">
          運賃
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
