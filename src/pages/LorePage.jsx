import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link per il routing
import '../styles/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoreCodex from '../components/LoreCodex';
// Importazione delle immagini
import sidebarLeftImage from '../assets/right-sideBar-catacomb.png';
import sidebarRightImage from '../assets/left-sideBar-catacomb.png';

const LorePage = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="left-sidebar">
          <img src={sidebarLeftImage} alt="Sidebar Image" className="sidebar-img" />
        </div>

        <div className="main-content">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt;{' '}
            <Link to="/lore" className="breadcrumb-current">Lore</Link>
          </div>
          <div className="content-title">LORE</div>
          <div className="lore-content-box">
            <LoreCodex/>
          </div>
        </div>

        <div className="right-sidebar">
          <img src={sidebarRightImage} alt="Sidebar Image" className="sidebar-img" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LorePage;
