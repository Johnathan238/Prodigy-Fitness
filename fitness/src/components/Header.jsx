import React from 'react'
// import Nav from './Nav'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">

      {/* <Nav /> */}
      <Link to='/'className="Home-Link">
        <h1>PRODIGY FITNESS </h1>
      </Link>
      {/* <div className="header--links">
        <Link to="/Login">
          <p className="header--login">Login</p>
        </Link>
      </div> */}
    </header>
  )
}

export default Header