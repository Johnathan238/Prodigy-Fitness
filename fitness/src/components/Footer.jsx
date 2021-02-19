import React from 'react'
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import './Compon.css'


const Footer = () => {
return (
    <footer className="footer">
    <a href="mailto:mbrisson23@yahoo.com" className="footer__link">mbrisson23@yahoo.com</a>
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
            <div className="footer--details-container sei-developers">
                <p className="footer--text">&copy; 2021 Prodigy Fitness - &copy; 2021 Prodigy Fitness - &copy; 2021 Prodigy Fitness
                - &copy; 2021 Prodigy Fitness - &copy; 2021 Prodigy Fitness - &copy; 2021 Prodigy Fitness</p>
            </div>
        </marquee>
    </footer>
    )
}

export default Footer;