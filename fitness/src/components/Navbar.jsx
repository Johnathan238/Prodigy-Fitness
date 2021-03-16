import React from 'react'
import NavItem from './NavItem'
// import DarkMode from './DarkMode'
import './Compon.css'


export function Navbar (props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> <NavItem /> </ul>

    </nav>
  )
}




