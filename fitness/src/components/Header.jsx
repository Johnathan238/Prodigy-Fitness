import React from 'react'
import './Compon.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">


      <Link to='/' className="Home-Link">
        <h1>PRODIGY FITNESS </h1>
      </Link>


      {/* <button className="nav-toggle" aria-label="toggle navigation">
          <span className="hamburger"></span>
        </button> */}

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a href="#home" class="nav__link">Home</a></li>

          <Link to='/'>
            <li className="nav__item">About Me</li>
          </Link>
          
          <Link to='/Plans'>
            <li className="nav__item">Plans</li>
          </Link>

          <Link to='/Schedule-With-Me'>
            <li className="nav__item">Schedule With Me</li>
          </Link>

          <li className="nav__item"><a href="https://docs.google.com/forms/d/e/1FAIpQLScnMSkRHUQGU7CoQuqW4Yqdef3c_1IEHpLNsBW5KIFOmaCGXA/viewform?usp=sf_link" target="_blank" class="nav__link">Let's work together</a></li>
        </ul>
      </nav>

    </header>
  )
}

export default Header