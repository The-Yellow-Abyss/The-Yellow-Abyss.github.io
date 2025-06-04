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

const mechanics = [
  {
    title: 'Dialoghi',
    desc: 'Dialoghi con NPC con scelte dai quali si possono ottenere informazioni, o quest svolgibili durante le partite.'
  },
  {
    title: 'Dungeon procedurali',
    desc: 'Mappe dei dungeon generate proceduralmente tramite algoritmo.'
  },
  {
    title: 'Combat',
    desc: 'Combattimenti principalmente all’arma bianca con diverse tipologie di armi con effetti e caratteristiche diverse.'
  },
  {
    title: 'Oggetti passivi',
    desc: 'Oggetti con abilità passive che potenziano il personaggio trovabili nelle stanze del tesoro o raramente nel negozio.'
  },
  {
    title: 'Negozio',
    desc: 'Nei piani delle catacombe c\'è un negozio nel quale si possono comprare cuori per curarsi, o raramente comprare oggetti passivi.'
  },
  {
    title: 'HP',
    desc: 'Sistema di cuori come sistema di vita per il giocatore. Il giocatore parte con quattro cuori e possono essere aumentati raccogliendo oggetti passivi con quell\'effetto, quando si subiscono danni ci si può curare solo raccogliendo cuori che vengono rilasciati dai nemici sconfitti, dalle stanze pulite come ricompensa, comprati nel negozio o rompendo casse e barili.'
  },
  {
    title: 'Codex',
    desc: 'Diario nel quale vengono visualizzate le informazioni dei nemici, dei boss, delle armi, degli oggetti passivi trovati, nel quale si puo’ anche visualizzare il proprio inventario.'
  },
  {
    title: 'Mappa',
    desc: 'E’ presente una mappa e una mini mappa del piano in cui ci si trova.'
  },
  {
    title: 'Teleport',
    desc: 'Nei livelli del dungeon ci sono dei teleport in alcune stanze e si attivano quando le stanze in cui sono presenti vengono sbloccate. I teleport possono essere usati per spostarsi rapidamente nella mappa.'
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
            <Link to="/gamemechanics" className="breadcrumb-current">Game Mechanics</Link>
          </div>
          <div className="content-title">GAME MECHANICS</div>
          <div className="content-box mechanics-carousel">
            <button className="mechanics-carousel-arrow left" onClick={prev} aria-label="Previous">
              <img src={backArrow} alt="Previous" className="mechanics-arrow-img" />
            </button>
            <div className="mechanic-item">
              <div className="mechanic-scroll-content">
                <div className="mechanic-media-placeholder"></div>
                <div className="mechanic-text-content">
                  <div className="mechanic-title">{mechanics[current].title}</div>
                  <div className="mechanic-desc">{mechanics[current].desc}</div>
                </div>
              </div>
            </div>
            <button className="mechanics-carousel-arrow right" onClick={next} aria-label="Next">
              <img src={nextArrow} alt="Next" className="mechanics-arrow-img" />
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
