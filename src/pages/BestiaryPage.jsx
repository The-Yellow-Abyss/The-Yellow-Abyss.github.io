import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import '../styles/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import sidebarLeftImage from '../assets/right-sideBar-catacomb.png';
import sidebarRightImage from '../assets/left-sideBar-catacomb.png';

// Importa le immagini per le card
import enemiesImage from '../admin/assets/plague_doctor_right_side.png';
import bossesImage from '../admin/assets/Monk-BOSS.png';
import creaturesImage from '../admin/assets/Rat-King-BOSS.png';

const MAX_VISIBILITY = 3;

const Card = ({ image, title }) => (
  <div className="bestiary-card">
    <img src={image} alt={title} className="bestiary-card-image" />
    <h2>{title}</h2>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(1);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="carousel-nav left" onClick={() => setActive(i => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            pointerEvents: active === i ? 'auto' : 'none',
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="carousel-nav right" onClick={() => setActive(i => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

const BestiaryPage = () => {
  const cardsData = [
    { image: enemiesImage, title: 'Enemies' },
    { image: bossesImage, title: 'Bosses' },
    { image: creaturesImage, title: 'NPC' },
  ];

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
            <Link to="/bestiary" className="breadcrumb-current">Bestiary</Link>
          </div>
          <div className="content-title">BESTIARY</div>

          <div className="content-box-bestiary">
            <Carousel>
              {cardsData.map((card, i) => (
                <Card key={i} image={card.image} title={card.title} />
              ))}
            </Carousel>
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

export default BestiaryPage;
