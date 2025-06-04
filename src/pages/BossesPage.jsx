import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import Footer from '../components/Footer';

import sidebarLeftImage from '../assets/right-sideBar-catacomb.png';
import sidebarRightImage from '../assets/left-sideBar-catacomb.png';
import FilterIcon from '../assets/filter_icon.png';

import bossesData from '../data/bosses.json';

const BossesPage = () => {
  const [bosses, setBosses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDangerLevel, setSelectedDangerLevel] = useState('all');

  useEffect(() => {
    setBosses(bossesData);
  }, []);

  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')       // Replace spaces with -
      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
      .replace(/\-\-+/g, '-');    // Replace multiple - with single -

  const allDangerLevels = Array.from(new Set(bosses.map((boss) => boss.danger_level)));

  const filteredBosses = bosses.filter((boss) => {
    const matchesName = boss.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDangerLevel = selectedDangerLevel === 'all' || boss.danger_level === selectedDangerLevel;
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
            <Link to="/creatures/bosses" className="breadcrumb-current">Boss</Link>
          </div>

          <div className="content-title">BOSS</div>

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
            {filteredBosses.length === 0 ? (
              <p style={{ color: "#fff", textAlign: "center", width: "100%" }}>
                Nessun boss corrispondente alla ricerca.
              </p>
            ) : (
              filteredBosses.map((boss, index) => (
                <Link
                  to={`/creatures/bosses/${slugify(boss.title)}`}
                  key={index}
                  className="item-link"
                >
                  <div className="item-container">
                    <div className="item-image">
                      <img src={boss.symbol} alt={boss.title} />
                    </div>
                    <div className="item-label">{boss.title}</div>
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

export default BossesPage;
