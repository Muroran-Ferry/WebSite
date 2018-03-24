import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
    <Link className="navbar-brand" to="#">
      室蘭フェリーターミナル
    </Link>

    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/#Top">
          トップ
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/#Access">
          アクセス
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
