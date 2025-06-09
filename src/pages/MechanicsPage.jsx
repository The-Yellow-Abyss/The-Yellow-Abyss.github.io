import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link per il routing
import '../styles/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importazione delle immagini
import sidebarLeftImage from '../assets/right-sideBar-catacomb.png';
import sidebarRightImage from '../assets/left-sideBar-catacomb.png';
import nextArrow from '../assets/next-arrow.png';
import backArrow from '../assets/back-arrow.png';

// Import media for each mechanic
import mechanicsDialoghi from '../assets/mechanics-dialoghi.png';
import mechanicsDungeon from '../assets/mechanics-dungeon.png';
import mechanicsCombat from '../assets/mechanics-combat.png';
import mechanicsOggetti from '../assets/mechanics-oggettipassivi.png';
import mechanicsNegozio from '../assets/mechanics-negozio.png';
import mechanicsHP from '../assets/mechanics-hp.png';
import mechanicsCodex from '../assets/mechanics-codex.png';
import mechanicsTeleport from '../assets/mechanics-teleport.mp4';
import mechanicsMappa from '../assets/mechanics-mappa.png';

const mechanics = [
  {
    title: 'Dialoghi',
    desc: 'Dialoghi con NPC con scelte dai quali si possono ottenere informazioni, o quest svolgibili durante le partite.',
    media: mechanicsDialoghi,
    aspectRatio: 1 // 1:1 (square)
  },
  {
    title: 'Dungeon procedurali',
    desc: 'Mappe dei dungeon generate proceduralmente tramite algoritmo.',
    media: mechanicsDungeon,
    aspectRatio: 16/9 // 16:9 (landscape)
  },
  {
    title: 'Combat',
    desc: 'Combattimenti principalmente all’arma bianca con diverse tipologie di armi con effetti e caratteristiche diverse.',
    media: mechanicsCombat,
    aspectRatio: 1 // 1:1 (square)
  },
  {
    title: 'Oggetti passivi',
    desc: 'Oggetti con abilità passive che potenziano il personaggio trovabili nelle stanze del tesoro o raramente nel negozio.',
    media: mechanicsOggetti,
    aspectRatio: 1 // 1:1 (square)
  },
  {
    title: 'Negozio',
    desc: 'Nei piani delle catacombe c\'è un negozio nel quale si possono comprare cuori per curarsi, o raramente comprare oggetti passivi.\n(Funzione in sviluppo, immagine placeholder)',
    media: mechanicsNegozio,
    aspectRatio: 1 // 1:1 (square)
  },
  {
    title: 'HP',
    desc: 'Sistema di cuori come sistema di vita per il giocatore. Il giocatore parte con quattro cuori e possono essere aumentati raccogliendo oggetti passivi con quell\'effetto, quando si subiscono danni ci si può curare solo raccogliendo cuori che vengono rilasciati dai nemici sconfitti, dalle stanze pulite come ricompensa, comprati nel negozio o rompendo casse e barili.',
    media: mechanicsHP,
    aspectRatio: 1 // 1:1 (square)
  },
  {
    title: 'Codex',
    desc: 'Diario nel quale vengono visualizzate le informazioni dei nemici, dei boss, delle armi, degli oggetti passivi trovati, nel quale si puo’ anche visualizzare il proprio inventario.',
    media: mechanicsCodex,
    aspectRatio: 1 // 1:1 (square)
  },
  {
    title: 'Mappa',
    desc: 'E’ presente una mappa e una mini mappa del piano in cui ci si trova.\n(Funzione in sviluppo, immagine placeholder)',
    media: mechanicsMappa,
    aspectRatio: 1 // 1:1 (square, adjust if needed)
  },
  {
    title: 'Teleport',
    desc: 'Nei livelli del dungeon ci sono dei teleport in alcune stanze e si attivano quando le stanze in cui sono presenti vengono sbloccate. I teleport possono essere usati per spostarsi rapidamente nella mappa.',
    media: mechanicsTeleport,
    aspectRatio: 16/9 // 16:9 (video)
  }
];

const MechanicsPage = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((current - 1 + mechanics.length) % mechanics.length);
  const next = () => setCurrent((current + 1) % mechanics.length);
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="left-sidebar">
          <img src={sidebarLeftImage} alt="Sidebar Image" className="sidebar-img" />
        </div>
        <div className="main-content">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt;{' '}
            <Link to="/gamemechanics" className="breadcrumb-current">Meccaniche di gioco</Link>
          </div>
          <div className="content-title">MECCANICHE DI GIOCO</div>
          <div className="content-box mechanics-carousel">
            <button className="mechanics-carousel-arrow left" onClick={prev} aria-label="Previous" style={{background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img src={backArrow} alt="Previous" className="mechanics-arrow-img" style={{width: '80px', height: '80px'}} />
            </button>
            <div className="mechanic-item" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              maxWidth: 'min(90vw, 540px)',
              margin: '0 auto',
              background: '#ffe9a7', // revert to previous yellow
              borderRadius: '16px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
              overflow: 'visible',
              border: '2.5px solid #7a1a1a', // keep deep red border
            }}>
              {/* Media section (top) */}
              {mechanics[current].media && mechanics[current].aspectRatio ? (
                <div style={{
                  width: '100%',
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden', // Option 3: hide overflow
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                }}>
                  {mechanics[current].media.endsWith && mechanics[current].media.endsWith('.mp4') ? (
                    <video src={mechanics[current].media} controls style={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: mechanics[current].aspectRatio,
                      background: 'transparent',
                      border: 'none',
                      maxHeight: 'min(50vw, 340px)'
                    }} />
                  ) : (
                    <img src={mechanics[current].media} alt={mechanics[current].title} style={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: mechanics[current].aspectRatio,
                      background: 'transparent',
                      border: 'none',
                      maxHeight: 'min(50vw, 340px)'
                    }} />
                  )}
                </div>
              ) : (
                <div style={{ width: '100%', aspectRatio: '1/1', background: 'transparent' }} />
              )}
              {/* Description section (bottom) */}
              <div className="mechanic-text-content" style={{
                width: '100%',
                padding: '1.2rem 1.5rem 1.5rem 1.5rem',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.5rem',
                flex: '1 1 auto',
                background: 'transparent',
              }}>
                <div className="mechanic-title" style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.3rem', color: '#5a4a1b' }}>{mechanics[current].title}</div>
                <div className="mechanic-desc" style={{ fontSize: '1rem', lineHeight: 1.5, color: '#5a4a1b' }}>{mechanics[current].desc}</div>
              </div>
            </div>
            <button className="mechanics-carousel-arrow right" onClick={next} aria-label="Next" style={{background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img src={nextArrow} alt="Next" className="mechanics-arrow-img" style={{width: '80px', height: '80px'}} />
            </button>
          </div>
        </div>
        <div className="right-sidebar">
          <img src={sidebarRightImage} alt="Sidebar Image" className="sidebar-img" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MechanicsPage;
