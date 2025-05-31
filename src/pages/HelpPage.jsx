// HelpPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HelpPage = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="left-sidebar" />

        <div className="main-content">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt;{' '}
            <Link to="/help" className="breadcrumb-current">Help</Link>
          </div>
          <div className="content-title">HELP PAGE</div>
          <div className="content-box">content-box</div>
          <div className="content-bottom"></div>
          
        </div>
        <Footer />
        <div className="right-sidebar" />
        <div className="content-bottom"></div>
      </div>
      
    </div>
  );
};

export default HelpPage;
