import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return (
        <footer>
            <span>
                <a className="brand--hover" href="https://github.com/JasonG7354" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="footer-icon"icon={faGithub} size="5x"></FontAwesomeIcon>
            </a></span>
            <a className="brand--hover" href="https://www.instagram.com/jason.garcia00/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="5x"></FontAwesomeIcon>
            </a>
        </footer>
    )
}