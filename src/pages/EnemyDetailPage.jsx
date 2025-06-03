import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link per il routing
import '../styles/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importazione delle immagini
import sidebarLeftImage from '../assets/right-sideBar-catacomb.png';
import sidebarRightImage from '../assets/left-sideBar-catacomb.png';

const EnemyDetailPage = () => {
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
            <Link to="/bestiary" className="breadcrumb-current">Enemy Name</Link>
          </div>
          <div className="content-title">ENEMY-NAME</div>
          <div className="content-box">content-box</div>
          <div className="content-bottom"></div>
        </div>

        <div className="right-sidebar">
          <img src={sidebarRightImage} alt="Sidebar Image" className="sidebar-img" />
        </div>
        
        
      </div>
      <Footer />
    </div>
  );
};

export default EnemyDetailPage;
