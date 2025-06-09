import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import Footer from '../components/Footer';

import sidebarLeftImage from '../assets/right-sideBar-catacomb.png';
import sidebarRightImage from '../assets/left-sideBar-catacomb.png';
import FilterIcon from '../assets/filter_icon.png';

import enemiesData from '../data/enemies.json';

const EnemiesPage = () => {
  const [enemies, setEnemies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDangerLevel, setSelectedDangerLevel] = useState('all');

  useEffect(() => {
    setEnemies(enemiesData);
  }, []);

  // Funzione per creare uno slug dal titolo del nemico
  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')       // Sostituisce spazi con -
      .replace(/[^\w\-]+/g, '')   // Rimuove caratteri non validi
      .replace(/\-\-+/g, '-');    // Rimuove doppie linee

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
      <div className="main">
        <div className="left-sidebar">
          <img src={sidebarLeftImage} alt="Sidebar Left" className="sidebar-img" />
        </div>

        <div className="main-content">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt;{' '}
            <Link to="/creatures" className="breadcrumb-link">Creature</Link> &gt;{' '}
            <Link to="/creatures/enemies" className="breadcrumb-current">Nemici</Link>
          </div>

          <div className="content-title">NEMICI</div>

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
                <img src={FilterIcon} alt="Filter Icon" className="filter-icon" />
                <select
                  value={selectedDangerLevel}
                  onChange={(e) => setSelectedDangerLevel(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">Livelli di pericolosità</option>
                  {allDangerLevels.map((level) => (
                    <option key={level} value={level}>
                      {level.charAt(0).toUpperCase() + level.slice(1)}
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
                <Link
                  to={`/creatures/enemies/${slugify(enemy.title)}`}
                  key={index}
                  className="item-link" // opzionale: per aggiungere stile
                >
                  <div className="item-container">
                    <div className="item-image">
                      <img src={enemy.image} alt={enemy.title} />
                    </div>
                    <div className="item-label">{enemy.title}</div>
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

export default EnemiesPage;
