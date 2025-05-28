import React from 'react';
import { Link } from 'react-router-dom';
import footerImage from '../assets/footer-the-yellow-abyss-2.png';
import '../styles/style.css'; 

const Footer = () => {
    return (
        <footer>
            <img src={footerImage} alt="footer-image" className="footer-bar" />
            <div className="footer-container">
                <div className="footer-links">
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><a href="#githubpage">Github</a></li>
                        <li><Link to="/help">Help</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
