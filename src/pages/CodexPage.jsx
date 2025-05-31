import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importazione delle immagini
import sidebarLeftImage from '../assets/right-sideBar-catacomb.png';
import sidebarRightImage from '../assets/left-sideBar-catacomb.png';


import FlipBook from '../components/FlipBook';

const CodexPage = () => {
  return (
    <div>
        <Navbar /> {/* Navbar visibile in tutte le pagine */}
      <div className="main">
        <div className="left-sidebar">
            <img src={sidebarLeftImage} alt="Sidebar Image" className="sidebar-img" />
        </div>

        <div className="main-content">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt;{' '}
            <Link to="/codex" className="breadcrumb-current">Codex</Link>
          </div>
          <div className="content-title">CODEX</div>
          <div className="codex-content-box">
            <FlipBook />
          </div>
        </div>

        <div className="right-sidebar">
            <img src={sidebarRightImage} alt="Sidebar Image" className="sidebar-img" />
        </div>
        
      </div>

      <Footer/>
    </div>
  );
};

export default CodexPage;
