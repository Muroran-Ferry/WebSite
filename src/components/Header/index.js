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
          <li
            className={
              location.pathname === '/timetable/'
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <Link className="nav-link" to="/timetable/">
              時刻表
            </Link>
          </li>
          <li
            className={
              location.pathname === '/fare/' ? 'nav-item active' : 'nav-item'
            }
          >
            <Link className="nav-link" to="/fare/">
              運賃
            </Link>
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
