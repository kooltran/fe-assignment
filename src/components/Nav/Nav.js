import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import NavIcon from '../../assets/images/icons/nav-icon.svg'

import './Nav.scss'

const Nav = () => {
  return (
    <Router>
      <div className="nav">
        <div className="nav-logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="nav-container">
          <div className="nav-item">
            <Link to="/">
              <img src={NavIcon} alt="" />
              <span>Home</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/tags">
              <img src={NavIcon} alt="" />
              <span>Tags</span>
            </Link>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Nav
