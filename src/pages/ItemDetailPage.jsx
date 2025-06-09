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

const ItemDetailPage = () => {
  const { itemName } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/items.json')
      .then((res) => res.json())
      .then((data) => {
        const matchedItem = data.find((i) => slugify(i.name) === itemName);
        setItem(matchedItem || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Errore nel caricamento del JSON:', error);
        setLoading(false);
      });
  }, [itemName]);

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

  if (!item) {
    return (
      <div>
        <Navbar />
        <div className="main-content" style={{ padding: '2rem', color: 'white' }}>
          <h2>Oggetto non trovato</h2>
          <p>Non esiste alcun oggetto con il nome specificato.</p>
          <Link to="/items" style={{ color: '#aaa' }}>&larr; Torna alla lista oggetti</Link>
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
            <Link to="/items" className="breadcrumb-link">Oggetti</Link> &gt;{' '}
            <span className="breadcrumb-current">{item.name}</span>
          </div>

          <div className="content-title">{item.name}</div>

          <div className="content-box-details">
            <div className="content-box-detail">
              <div className="detail-left">
                <div className="detail-image">
                  <img src={item.icon} alt={item.name} className="detail-img" />
                </div>
                <div className="detail-skills">
                  <h4>Tipo</h4>
                  <p>{item.object}</p>
                </div>
              </div>
            </div>

            <div className="detail-right-paper">
              <div className="detail-container-paper">
                <div id="detail-page" className="page-container">
                  <div className="page-detail-content">
                    <div className="detail-description-content">
                      <p>{item.description || 'Nessuna descrizione disponibile.'}</p>
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

export default ItemDetailPage;
