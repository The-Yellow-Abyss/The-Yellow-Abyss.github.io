import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import sidebarLeftImage from '../assets/right-sideBar-catacomb.png';
import sidebarRightImage from '../assets/left-sideBar-catacomb.png';
import FilterIcon from '../assets/filter_icon.png';

import itemsData from '../data/items.json';

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    setItems(itemsData);
  }, []);

  const slugify = (text) =>
    text.toString().toLowerCase().trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-');

  const filteredItems = items.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || item.object === selectedType;
    return matchesName && matchesType;
  });

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
            <Link to="/items" className="breadcrumb-current">Oggetti</Link>
          </div>

          <div className="content-title">OGGETTI</div>

          <div className="content-search">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <div className="filter-wrapper">
                <img src={FilterIcon} alt="All Items Icon" className="filter-icon" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Items</option>
                  <option value="treasure">Tesori</option>
                  <option value="weapon">Armi</option>
                </select>
              </div>
            </div>
          </div>

          <div className="content-box-items">
            {filteredItems.length === 0 ? (
              <p style={{ color: "#fff", textAlign: "center", width: "100%" }}>
                Nessun item corrispondente alla ricerca.
              </p>
            ) : (
              filteredItems.map((item, index) => (
                <Link
                  to={`/items/${slugify(item.name)}`}
                  key={index}
                  className="item-link"
                >
                  <div className="item-container">
                    <div className="item-image">
                      <img src={item.icon} alt={item.name} />
                    </div>
                    <div className="item-label">{item.name}</div>
                  </div>
                </Link>
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
