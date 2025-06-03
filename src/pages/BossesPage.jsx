import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import sidebarLeftImage from '../assets/right-sideBar-catacomb.png';
import sidebarRightImage from '../assets/left-sideBar-catacomb.png';
import FilterIcon from '../assets/filter_icon.png';

import enemiesData from '../data/bosses.json';

const BossesPage = () => {
  const [enemies, setEnemies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDangerLevel, setSelectedDangerLevel] = useState('all');

  useEffect(() => {
    setEnemies(enemiesData);
  }, []);

  // Array dei livelli di pericolosità unici
  const allDangerLevels = Array.from(new Set(enemies.map((enemy) => enemy.danger_level)));

  // Filtra i nemici in base al nome e al livello di pericolosità
  const filteredEnemies = enemies.filter((enemy) => {
    const matchesName = enemy.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDangerLevel = selectedDangerLevel === 'all' || enemy.danger_level === selectedDangerLevel;
    return matchesName && matchesDangerLevel;
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
            <Link to="/creatures" className="breadcrumb-current">Creatures</Link> &gt;{' '}
            <Link to="/creatures/bosses" className="breadcrumb-current">Bosses</Link>
          </div>

          <div className="content-title">BOSSES</div>

          <div className="content-search">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <div className="filter-wrapper">
                <img src={FilterIcon} alt="Filter Icon" className="filter-icon" />
                <select
                  value={selectedDangerLevel}
                  onChange={(e) => setSelectedDangerLevel(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Danger Levels</option>
                  {allDangerLevels.map((level) => (
                    <option key={level} value={level}>
                      {level.charAt(0).toUpperCase() + level.slice(1)} {/* Capitalize level */}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="content-box-items">
            {filteredEnemies.length === 0 ? (
              <p style={{ color: "#fff", textAlign: "center", width: "100%" }}>
                Nessun nemico corrispondente alla ricerca.
              </p>
            ) : (
              filteredEnemies.map((enemy, index) => (
                <div key={index} className="item-container">
                  <div className="item-image">
                    <img src={enemy.symbol} alt={enemy.title} />
                  </div>
                  <div className="item-label">{enemy.title}</div>
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

export default BossesPage;
