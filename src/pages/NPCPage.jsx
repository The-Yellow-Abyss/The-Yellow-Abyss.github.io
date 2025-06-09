import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import Footer from '../components/Footer';

import sidebarLeftImage from '../assets/right-sideBar-catacomb.png';
import sidebarRightImage from '../assets/left-sideBar-catacomb.png';

import npcData from '../data/npc.json';

const NPCPage = () => {
  const [npcs, setNpcs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setNpcs(npcData);
  }, []);

  const slugify = (text) =>
    text.toString().toLowerCase().trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-');

  const filteredNpcs = npcs.filter((npc) =>
    npc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <Link to="/creatures/npc" className="breadcrumb-current">NPC</Link>
          </div>

          <div className="content-title">NPC</div>

          <div className="content-search">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Cerca per nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="content-box-items">
            {filteredNpcs.length === 0 ? (
              <p style={{ color: "#fff", textAlign: "center", width: "100%" }}>
                Nessun NPC corrispondente alla ricerca.
              </p>
            ) : (
              filteredNpcs.map((npc, index) => (
                <Link
                  to={`/creatures/npc/${slugify(npc.name)}`}
                  key={index}
                  className="item-link"
                >
                  <div className="item-container">
                    <div className="item-image">
                      <img src={npc.image} alt={npc.name} />
                    </div>
                    <div className="item-label">{npc.name}</div>
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

export default NPCPage;
