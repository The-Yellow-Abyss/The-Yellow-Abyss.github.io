import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import '../styles/HomeStyle.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importazione immagini
import sidebarLeftImage from '../assets/right-sideBar-catacomb.png';
import sidebarRightImage from '../assets/left-sideBar-catacomb.png';
import titleImage from '../assets/The_Yellow_Abyss_game_Title_3.png';
import steamBtn1 from '../assets/steamButton0.png';
import steamBtn2 from '../assets/steamButton1.png';
import stemImage from '../assets/StemPagezs.png';
import diaryIcon from '../assets/Diario-icona.PNG';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="left-sidebar">
          <img src={sidebarLeftImage} alt="Sidebar Left" className="sidebar-img" />
        </div>

        <div className="main-content">
          <div className="content-title breadcrumb">
            <Link to="/" className="breadcrumb-current">Home</Link>
          </div>

          {/* Titolo centrale */}
          <div className="title-image-container">
            <img src={titleImage} alt="Game Title" className="title-image" />
            <Link to="/codex" className="diary-button">
              <img src={diaryIcon} alt="Diario" />
            </Link>
          </div>

          {/* Sezione video + descrizione */}
          <div className="video-description-container">
            <div className="video-box">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/U0arvSdTXAc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            </div>
            <div className="description-box">
              <div className="description-text">
                <p>
                  Un cavaliere di nome Rosalind si addentra nelle catacombe della cattedrale della santa chiesa dell’impero, in cerca della sua amata Valerika scomparsa. 
                  Dovrà affrontare creature grottesche per raggiungere le profondità delle catacombe, ricevendo l'aiuto da un particolare vecchio signore vestito di giallo. 
                  I cittadini della citta' Tetai, capitale dell'impero, sono caduti sotto una profonda follia finendo per mutare in forme grottesche. 
                  L'epicentro di questa follia sono le catacombe della santa chiesa. Tutti coloro che hanno provato ad addentrarsi nelle catacombe sono ora esposti al suo ingresso come monito per i futuri avventurieri. 
                </p>
              </div>
            </div>
          </div>

          {/* Bottone sotto */}
          <div className="button-container">
            <button
              className="steam-button"
              onClick={() => window.open(stemImage, '_blank')}
            ></button>
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

export default HomePage;
