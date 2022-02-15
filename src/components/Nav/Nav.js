import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import classNames from 'classnames'

import { NavIcon } from '../../components'

import './Nav.scss'

const Nav = () => {
  const { pathname } = useLocation()

  return (
    <div className="nav">
      <div className="nav-logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="nav-container">
        <div
          className={classNames('nav-item', {
            active: !pathname.includes('tags'),
          })}
        >
          <Link to="/">
            <NavIcon color={!pathname.includes('tags') ? '#fff' : '#8A8A8F'} />
            <span>Home</span>
          </Link>
        </div>
        <div
          className={classNames('nav-item', {
            active: pathname.includes('tags'),
          })}
        >
          <Link to="/tags">
            <NavIcon color={pathname.includes('tags') ? '#fff' : '#8A8A8F'} />
            <span>Tags</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
