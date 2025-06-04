import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link per il routing
import '../styles/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importazione delle immagini
import sidebarLeftImage from '../assets/right-sideBar-catacomb.png';
import sidebarRightImage from '../assets/left-sideBar-catacomb.png';

const MechanicsPage = () => {
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
          <div className="content-box mechanics-list">
            <div className="mechanic-item">
              <div className="scroll-side left"></div>
              <div className="scroll-side right"></div>
              <div className="mechanic-title">Dialoghi</div>
              <div className="mechanic-desc">Dialoghi con NPC con scelte dai quali si possono ottenere informazioni, o quest svolgibili durante le partite.</div>
            </div>
            <div className="mechanic-item">
              <div className="scroll-side left"></div>
              <div className="scroll-side right"></div>
              <div className="mechanic-title">Dungeon procedurali</div>
              <div className="mechanic-desc">Mappe dei dungeon generate proceduralmente tramite algoritmo.</div>
            </div>
            <div className="mechanic-item">
              <div className="scroll-side left"></div>
              <div className="scroll-side right"></div>
              <div className="mechanic-title">Combat</div>
              <div className="mechanic-desc">Combattimenti principalmente all’arma bianca con diverse tipologie di armi con effetti e caratteristiche diverse.</div>
            </div>
            <div className="mechanic-item">
              <div className="scroll-side left"></div>
              <div className="scroll-side right"></div>
              <div className="mechanic-title">Oggetti passivi</div>
              <div className="mechanic-desc">Oggetti con abilità passive che potenziano il personaggio trovabili nelle stanze del tesoro o raramente nel negozio.</div>
            </div>
            <div className="mechanic-item">
              <div className="scroll-side left"></div>
              <div className="scroll-side right"></div>
              <div className="mechanic-title">Negozio</div>
              <div className="mechanic-desc">Nei piani delle catacombe c'è un negozio nel quale si possono comprare cuori per curarsi, o raramente comprare oggetti passivi.</div>
            </div>
            <div className="mechanic-item">
              <div className="scroll-side left"></div>
              <div className="scroll-side right"></div>
              <div className="mechanic-title">HP</div>
              <div className="mechanic-desc">Sistema di cuori come sistema di vita per il giocatore. Il giocatore parte con quattro cuori e possono essere aumentati raccogliendo oggetti passivi con quell'effetto, quando si subiscono danni ci si può curare solo raccogliendo cuori che vengono rilasciati dai nemici sconfitti, dalle stanze pulite come ricompensa, comprati nel negozio o rompendo casse e barili.</div>
            </div>
            <div className="mechanic-item">
              <div className="scroll-side left"></div>
              <div className="scroll-side right"></div>
              <div className="mechanic-title">Codex</div>
              <div className="mechanic-desc">Diario nel quale vengono visualizzate le informazioni dei nemici, dei boss, delle armi, degli oggetti passivi trovati, nel quale si puo’ anche visualizzare il proprio inventario.</div>
            </div>
            <div className="mechanic-item">
              <div className="scroll-side left"></div>
              <div className="scroll-side right"></div>
              <div className="mechanic-title">Mappa</div>
              <div className="mechanic-desc">E’ presente una mappa e una mini mappa del piano in cui ci si trova.</div>
            </div>
            <div className="mechanic-item">
              <div className="scroll-side left"></div>
              <div className="scroll-side right"></div>
              <div className="mechanic-title">Teleport</div>
              <div className="mechanic-desc">Nei livelli del dungeon ci sono dei teleport in alcune stanze e si attivano quando le stanze in cui sono presenti vengono sbloccate. I teleport possono essere usati per spostarsi rapidamente nella mappa.</div>
            </div>
          </div>
          <div className="content-bottom"></div>
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
