import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/style.css';
import '../styles/DetailPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import sidebarLeftImage from '../assets/right-sideBar-catacomb.png';
import sidebarRightImage from '../assets/left-sideBar-catacomb.png';

const slugify = (text) =>
  text.toString().toLowerCase().trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');

const NPCDetailPage = () => {
  const { npcName } = useParams();
  const [npc, setNpc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/npc.json')
      .then((res) => res.json())
      .then((data) => {
        const matchedNpc = data.find((n) => slugify(n.name) === npcName);
        setNpc(matchedNpc || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Errore nel caricamento del JSON:', error);
        setLoading(false);
      });
  }, [npcName]);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="main-content" style={{ padding: '2rem', color: 'white' }}>
          <p>Caricamento...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!npc) {
    return (
      <div>
        <Navbar />
        <div className="main-content" style={{ padding: '2rem', color: 'white' }}>
          <h2>NPC non trovato</h2>
          <p>Non esiste alcun NPC con il nome specificato.</p>
          <Link to="/creatures/npc" style={{ color: '#aaa' }}>&larr; Torna alla lista NPC</Link>
        </div>
        <Footer />
      </div>
    );
  }

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
            <Link to="/creatures" className="breadcrumb-link">Creature</Link> &gt;{' '}
            <Link to="/creatures/npc" className="breadcrumb-link">NPC</Link> &gt;{' '}
            <span className="breadcrumb-current">{npc.name}</span>
          </div>

          <div className="content-title">{npc.name}</div>

          <div className="content-box-details">
            <div className="content-box-detail">
              <div className="detail-left">
                <div className="detail-image">
                  <img src={npc.image} alt={npc.name} className="detail-img" />
                </div>
                {npc.role && (
                  <div className="detail-skills">
                    <h4>Ruolo</h4>
                    <p>{npc.role}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="detail-right-paper">
              <div className="detail-container-paper">
                <div id="detail-page" className="page-container">
                  <div className="page-detail-content">
                    <div className="detail-description-content">
                      <p>{npc.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-bottom"></div>
        </div>

        <div className="right-sidebar">
          <img src={sidebarRightImage} alt="Sidebar Right" className="sidebar-img" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NPCDetailPage;
