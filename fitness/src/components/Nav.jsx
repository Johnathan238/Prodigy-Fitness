import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/Plans">
        <p className="header--create">Plans</p>
      </Link>
      <Link to="/Schedule With Me">
        <p ClassName="header--create">Schedule With Me</p>
      </Link>
    </nav>
  )
}

export default Nav