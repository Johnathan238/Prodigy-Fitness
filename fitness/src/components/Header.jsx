import React from 'react'
import './Compon.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">




      {/* <button className="nav-toggle" aria-label="toggle navigation">
          <span className="hamburger"></span>
        </button> */}

      <nav className="nav">
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <Link to='/' className="Home-Link">
          <h1>PRODIGY FITNESS </h1>
        </Link>

        <ul className="nav__list">

          <Link to='/'>
            <li className="nav__item">About Me</li>
          </Link>

          <Link to='/Plans'>
            <li className="nav__item">Plans</li>
          </Link>

          
            <li className="nav__item"><a href="https://docs.google.com/forms/d/e/1FAIpQLSe_GMrl59g4LeierD0XkO2S5yLU6P8b4ItKtrvmfRnj4p4SmA/viewform?usp=sf_link" target="_blank">Schedule With Me</a></li>
          
          
          
        </ul>
      </nav>

    </header>
  )
}

export default Header