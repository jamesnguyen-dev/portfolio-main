import React from 'react';
import "./footer.css";
import { FiGithub, FiLinkedin } from 'react-icons/fi';
// eslint-disable-next-line 
import { SiLinktree } from "react-icons/si";
import { LuFolderTree } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">James Nguyen</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://linktr.ee/devjamesnguyen" className="home__social-icon" target="_blank" rel="noreferrer">
                    <LuFolderTree />
                </a>
                <a href="https://www.github.com/jamesnguyen-dev" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/devjamesn/" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>    
            </div>
            <div className='footer__copy'>
                <p className="footer__copy">© 2024 James Nguyen. All rights reserved.</p>
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;