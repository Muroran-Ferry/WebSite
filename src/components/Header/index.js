import React from 'react'
import Link from 'gatsby-link'

class Header extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary justify-content-between sticky-top">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>

        <ul className="navbar-nav">
          <li
            className={
              location.pathname === '/' && location.hash !== '#Access'
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <Link className="nav-link" to="/">
              トップ
            </Link>
          </li>
          <li
            className={
              location.pathname === '/' && location.hash === '#Access'
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <Link className="nav-link" to="/#Access">
              アクセス
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.silverferry.jp/schedule/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              時刻表
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="https://www.silverferry.jp/fare/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              運賃
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                className="dropdown-item"
                href="https://www.silverferry.jp/fare/#passenger"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                旅客運賃
              </a>
              <a
                className="dropdown-item"
                href="https://www.silverferry.jp/fare/#automobile"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                乗用車運賃
              </a>
              <a
                className="dropdown-item"
                href="https://www.silverferry.jp/fare/#bike"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                特殊手荷物運賃（オートバイ・自転車等）
              </a>
              <a
                className="dropdown-item"
                href="https://www.silverferry.jp/fare/#baggage"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                手小荷物運賃
              </a>
              <a
                className="dropdown-item"
                href="https://www.silverferry.jp/FareFreight/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                貨物自動車運賃（トラック・バス等）
              </a>
              <div className="dropdown-divider" />
              <a
                className="dropdown-item"
                href="https://www.silverferry.jp/fare/#discount"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                各種割引
              </a>
            </div>
          </li>
          <li
            className={
              location.pathname === '/reservation/'
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <Link className="nav-link" to="/reservation/">
              予約方法
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
