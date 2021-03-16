import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import DarkMode from './DarkMode'
import './Compon.css'


export function NavItem(props) {
    return (
        <li className="nav-item">
            <Logo />

            <Link to="/">
            <span className="icon-button"> 🦾 </span>
            </Link>

            <Link to="/Plans">
            <span className="icon-button"> 💳 </span>
            </Link>

            
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_GMrl59g4LeierD0XkO2S5yLU6P8b4ItKtrvmfRnj4p4SmA/viewform?usp=sf_link" target="_blank" className="icon-button"> 📅 </a>
            
            <DarkMode />

        </li>
    )
}

export default NavItem
