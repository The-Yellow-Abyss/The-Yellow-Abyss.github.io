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

const BossDetailPage = () => {
  const { bossName } = useParams();
  const [boss, setBoss] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/bosses.json')
      .then((res) => res.json())
      .then((data) => {
        const matchedBoss = data.find((b) => slugify(b.title) === bossName);
        setBoss(matchedBoss || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Errore nel caricamento del JSON:', error);
        setLoading(false);
      });
  }, [bossName]);

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

  if (!boss) {
    return (
      <div>
        <Navbar />
        <div className="main-content" style={{ padding: '2rem', color: 'white' }}>
          <h2>Boss non trovato</h2>
          <p>Non esiste alcun boss con il nome specificato.</p>
          <Link to="/creatures/bosses" style={{ color: '#aaa' }}>&larr; Torna ai Boss</Link>
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
            <Link to="/creatures/bosses" className="breadcrumb-link">Boss</Link> &gt;{' '}
            <span className="breadcrumb-current">{boss.title}</span>
          </div>

          <div className="content-title">{boss.title}</div>

          <div className="content-box-details">
            <div className="content-box-detail">
              <div className="detail-left">
                <div
                  className="danger-level-box"
                  style={{
                    backgroundColor: ['High', 'Alto'].includes(boss.danger_level) ? 'red' :
                                    ['Medium', 'Medio'].includes(boss.danger_level) ? 'orange' :
                                    ['Low', 'Basso'].includes(boss.danger_level) ? 'green' :
                                    'gray'
                  }}
                >
                  {boss.danger_level}
                </div>
                <div className="detail-image">
                  <img src={boss.image} alt={boss.title} className="detail-img" />
                </div>
                <div className="detail-skills">
                  <h4>Skills</h4>
                  <ul>
                    {boss.skills?.map((skill, index) => (
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
                      <p>{boss.description}</p>
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

export default BossDetailPage;
