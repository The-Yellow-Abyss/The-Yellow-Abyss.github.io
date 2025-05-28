import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/style.css';
import '../styles/navbar.css';

import navImage from '../assets/nav_yellow_king.png';
import logoImage from '../assets/The_Yellow_Abyss_game_Title_3.png';
import helpIcon from '../assets/help-button-2.png';

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={navImage} alt="nav-image" className="nav-bar" />
        <div className="hyperlinks-container">
          <div className="logo-container">
            <Link to="/">
              <img src={logoImage} alt="Logo" className="logo" />
            </Link>
          </div>

          <div className="links-container">
            <div className="links-group left-group">
              <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/bestiary">BESTIARY</Link></li>
                <li><Link to="/lore">LORE</Link></li>
              </ul>
            </div>

            <div className="links-group right-group">
              <ul>
                <li><Link to="/codex">CODEX</Link></li>
                <li><Link to="/items">ITEMS</Link></li>
                <li><Link to="/gamemechanics">GAME</Link></li>
              </ul>
            </div>
          </div>

          <div className="help-container">
            <Link to="/help">
              <img src={helpIcon} alt="Help" className="help-icon" />
            </Link>
          </div>

          <div className="hamburger-icon" id="hamburger-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
