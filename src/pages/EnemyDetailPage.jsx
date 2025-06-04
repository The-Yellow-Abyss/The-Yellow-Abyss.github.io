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

const EnemyDetailPage = () => {
  const { enemyName } = useParams();
  const [enemy, setEnemy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/enemies.json')
      .then((res) => res.json())
      .then((data) => {
        const matchedEnemy = data.find((e) => slugify(e.title) === enemyName);
        setEnemy(matchedEnemy || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Errore nel caricamento del JSON:', error);
        setLoading(false);
      });
  }, [enemyName]);

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

  if (!enemy) {
    return (
      <div>
        <Navbar />
        <div className="main-content" style={{ padding: '2rem', color: 'white' }}>
          <h2>Nemico non trovato</h2>
          <p>Non esiste alcun nemico con il nome specificato.</p>
          <Link to="/creatures/enemies" style={{ color: '#aaa' }}>&larr; Torna agli Enemies</Link>
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
            <Link to="/creatures/enemies" className="breadcrumb-link">Nemici</Link> &gt;{' '}
            <span className="breadcrumb-current">{enemy.title}</span>
          </div>

          <div className="content-title">{enemy.title}</div>

          <div className="content-box-details">
            <div className="content-box-detail">
              {/* Colonna sinistra: danger, image, skills */}
              <div className="detail-left">
                <div
                  className="danger-level-box"
                  style={{
                    backgroundColor:
                      enemy.danger_level === 'High' ? 'red' :
                      enemy.danger_level === 'Medium' ? 'orange' :
                      'green'
                  }}
                >
                  {enemy.danger_level}
                </div>
                <div className="detail-image">
                  <img src={enemy.image} alt={enemy.title} className="detail-img" />
                </div>
                <div className="detail-skills">
                  <h4>Skills</h4>
                  <ul>
                    {enemy.skills?.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
              </div>
              <div className="detail-right-paper">
                <div className="detail-container-paper">
                <div id="detail-page" className="page-container">
                  <div className="page-detail-content">
                    <div className="detail-description-content">
                      <div><p>{enemy.description}</p></div>
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

export default EnemyDetailPage;
