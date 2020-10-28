import React from 'react'
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import './Compon.css'


const Footer = () => {
  return (
    <footer className="footer">
       <a href="mailto:mbrisson23@yahoo.com" class="footer__link">mbrisson23@yahoo.com</a>
        <ul class="social-list">
            <li class="social-list__item">
                <a class="social-list__link" href="https://youtu.be/_caukWh354s" target="_blank">
                    <FaYoutube />
                </a>
            </li>
            <li class="social-list__item">
                <a class="social-list__link" href="https://www.instagram.com/_prodigy.fitness/?hl=en" target="_blank">
                    <FaInstagram />
                </a>
            </li>
            <li class="social-list__item">
                <a class="social-list__link" href="https://twitter.com/_prodigyfitness" target="_blank">
                    <FaTwitter />
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer;