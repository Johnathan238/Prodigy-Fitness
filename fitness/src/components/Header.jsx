import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">

      <Nav />
      <Link to='/' exact className="Home-Link">
        <h1>Vehicle-Stats-2.0</h1>
      </Link>
      <div className="header--links">
        <Link to="/Login">
          <p className="header--login">Login</p>
        </Link>
      </div>
    </header>
  )
}

export default Header