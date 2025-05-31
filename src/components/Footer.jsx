import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import footerImage from '../assets/footer-the-yellow-abyss-2.png';
import '../styles/style.css'; 

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        // Se l'utente è in fondo alla pagina (o quasi)
        if (scrollTop + clientHeight >= scrollHeight - 1) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);


    return (
        <footer className={isVisible ? 'visible' : ''}>
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
