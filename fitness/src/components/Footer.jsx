import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <footer className="footer">
       <a href="mailto:mbrisson23@yahoo.com" class="footer__link">mbrisson23@yahoo.com</a>
        <ul class="social-list">
            <li class="social-list__item">
                <a class="social-list__link" href="https://www.linkedin.com/in/johnathan-umana-658b06170/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
            </li>
            <li class="social-list__item">
                <a class="social-list__link" href="https://github.com/Johnathan238" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </li>
            <li class="social-list__item">
                <a class="social-list__link" href="https://docs.google.com/forms/d/e/1FAIpQLScnMSkRHUQGU7CoQuqW4Yqdef3c_1IEHpLNsBW5KIFOmaCGXA/viewform?usp=sf_link" target="_blank">
                    <i class="fas fa-calendar-check"></i>
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer;