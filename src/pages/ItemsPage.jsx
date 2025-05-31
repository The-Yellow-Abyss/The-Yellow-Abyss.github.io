import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import sidebarLeftImage from '../assets/right-sideBar-catacomb.png';
import sidebarRightImage from '../assets/left-sideBar-catacomb.png';

import itemsData from '../data/items.json'; // <--- IMPORTAZIONE JSON

const ItemsPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Carica gli items dal file JSON importato
    setItems(itemsData);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="left-sidebar">
          <img src={sidebarLeftImage} alt="Sidebar Left" className="sidebar-img" />
        </div>

        <div className="main-content">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt;{' '}
            <Link to="/items" className="breadcrumb-current">Items</Link>
          </div>

          <div className="content-title">ITEMS</div>

          <div className="content-box-items">
            {items.length === 0 ? (
              <p style={{ color: "#fff", textAlign: "center", width: "100%" }}>
                Nessun item disponibile.
              </p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="item-container">
                  <div className="item-image">
                    <img src={`${item.icon}`} alt={item.name} />
                    {/* oppure importa direttamente l'immagine se non è in /public */}
                  </div>
                  <div className="item-label">{item.name}</div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="right-sidebar">
          <img src={sidebarRightImage} alt="Sidebar Right" className="sidebar-img" />
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default ItemsPage;
