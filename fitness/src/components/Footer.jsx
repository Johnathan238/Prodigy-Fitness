import React from 'react'
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import './Compon.css'


const Footer = () => {
return (
    <footer className="footer">
    <a href="mailto:prodigyfitness21@gmail.com" className="footer__link">prodigyfitness21@gmail.com</a>
        <ul className="social-list">
            <li className="social-list__item">
                <a className="social-list__link" href="https://youtu.be/_caukWh354s" target="_blank">
                    <FaYoutube />
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://www.instagram.com/_prodigy.fitness/?hl=en" target="_blank">
                    <FaInstagram />
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://twitter.com/_prodigyfitness" target="_blank">
                    <FaTwitter />
                </a>
            </li>
        </ul>

        <marquee>
                <p className="footer--text">&copy; 2021 Prodigy Fitness - &copy; 2021 Prodigy Fitness - &copy; 2021 Prodigy Fitness
                - &copy; 2021 Prodigy Fitness - &copy; 2021 Prodigy Fitness - &copy; 2021 Prodigy Fitness - &copy; 2021 Prodigy Fitness 
                - &copy; 2021 Prodigy Fitness - &copy; 2021 Prodigy Fitness - &copy; 2021 Prodigy Fitness - &copy; 2021 Prodigy Fitness</p>
        </marquee>
    </footer>
    )
}

export default Footer;