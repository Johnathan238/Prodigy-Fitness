import React from 'react'
import './Script'
// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">


      {/* <Link to='/'className="Home-Link">
        <h1>PRODIGY FITNESS </h1>
      </Link> */}
        
      <div className="Logo">
        <img src="https://images.unsplash.com/photo-1603665409265-bdc00027c217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80" alt="Red-Workout-Ball" />
      </div>
        
        <button className="nav-toggle" aria-label="toggle navigation">
          <span className="hamburger"></span>
        </button>
        
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" class="nav__link">Home</a></li>
            <li className="nav__item"><a href="#services" class="nav__link">My Services</a></li>
            <li className="nav__item"><a href="#about" class="nav__link">About me</a></li>
            <li className="nav__item"><a href="#work" class="nav__link">My Work</a></li>
            <li className="nav__item"><a href="https://docs.google.com/forms/d/e/1FAIpQLScnMSkRHUQGU7CoQuqW4Yqdef3c_1IEHpLNsBW5KIFOmaCGXA/viewform?usp=sf_link" target="_blank" class="nav__link">Let's work together</a></li>
          </ul>
        </nav>

    </header>
  )
}

export default Header