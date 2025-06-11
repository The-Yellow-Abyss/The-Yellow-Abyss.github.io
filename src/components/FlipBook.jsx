import React, { useState } from "react";
import "../styles/FlipBook.css";
import { inventory } from "../data/inventory"; 
import { weapons } from "../data/weapons"; 
import { treasures } from "../data/items";
import { enemies } from "../data/bestiary"; 
import { bosses } from "../data/bosses"; 
import { npcs } from "../data/npc"; 

import { FrontInventory, BackInventory } from "./InventoryContent";
import { FrontItems, BackItems } from "./ItemsContent";

import { FrontWeapons, BackWeapons } from "./WeaponsContent";
import { FrontBestiary, BackBestiary } from "./BestiaryContent";
import { FrontBosses, BackBosses } from "./BossesContent";
import { FrontNPC, BackNPC } from "./NPCContent";

import backArrow from "../assets/back-arrow.png";
import nextArrow from "../assets/next-arrow.png";




const FlipBook = () => {
  const [currentState, setCurrentState] = useState(1);
  const [selectedInventory, setSelectedInventory] = useState(inventory[0]);
  const [selectedWeapons, setSelectedWeapons] = useState(weapons[0]);
  const [selectedItem, setSelectedItem] = useState(treasures[0]);
  const [selectedEnemy, setSelectedEnemy] = useState(enemies[0]);
  const [selectedBosses, setSelectedBosses] = useState(bosses[0]);
  const [selectedNPC, setSelectedNPC] = useState(npcs[0]);
  
  const numOfPapers = 11;
  const maxState = numOfPapers + 1;

  // Funzione per scorrere avanti/indietro in modo progressivo
  const goToPageSmoothly = (targetPage) => {
    if (targetPage < 1 || targetPage > maxState) return;

    const step = targetPage > currentState ? 1 : -1;

    const interval = setInterval(() => {
      setCurrentState((prev) => {
        const next = prev + step;

        if (next === targetPage) {
          clearInterval(interval);
        }

        return next;
      });
    }, 150); // Velocità di flip (ms)
  };

  const goNext = () => {
    if (currentState < maxState) {
      setCurrentState(currentState + 1);
    }
  };

  const goPrevious = () => {
    if (currentState > 1) {
      setCurrentState(currentState - 1);
    }
  };

  const pages = [
  {
    front: <div></div>,
    back: <div></div>,
  },
  {
    front:  
      <div>
        <h2>Benvenuto nel Codex!</h2>
        <p>Qui troverai dettagli su personaggi chiave, armi leggendarie, tesori nascosti e i pericoli che affronterai nel tuo viaggio.</p>
        <br></br>
        <br></br>
        <p>Usa questo Codex come guida e compagno fedele mentre esplori il mondo, scopri alleati e nemici, e sveli il destino che ti attende.</p>
      </div>,
    back: <BackInventory inventory={inventory} onSelect={setSelectedInventory}/>,
  },
  {
    front: <FrontInventory item={selectedInventory}/>,
    back: <BackWeapons weapons={weapons} onSelect={setSelectedWeapons}/>,
  },
  {
    front: <FrontWeapons weapon={selectedWeapons}/>,
    back: <BackItems treasures={treasures} onSelect={setSelectedItem} />,
  },
  {
    front: <FrontItems item={selectedItem} />,
    back: <BackBestiary enemies={enemies} onSelect={setSelectedEnemy} />,
  },
  {
    front: <FrontBestiary enemy={selectedEnemy} />,
    back: <BackBosses bosses={bosses} onSelect={setSelectedBosses}/>,
  },
  {
    front: <FrontBosses boss={selectedBosses}/>,
    back: <BackNPC npcs={npcs} onSelect={setSelectedNPC}/>,
  },
  {
    front: <FrontNPC npc={selectedNPC}/>,
    back: 
      <div>
        <h1>Comandi</h1>
        <p>Per muoverti nel gioco, puoi utilizzare le frecce direzionali</p> 
        <br></br>
        <p>(<span>&#8594;</span> , <span>&#8592;</span> , <span>&#8593;</span> , <span>&#8595;</span> ) oppure i tasti</p>
        <br></br>
        <h2> "W", "A", "S", "D" </h2>
        <p>come alternativa.</p>
      </div>,
  },
  {
    front: 
      <div>
        <h1>Rotazione e Attacco</h1>
        <p>Per ruotare la visuale, sposta il mouse.</p> 
        <p>Per attaccare, clicca con il tasto sinistro del mouse.</p>
        <br></br>
        <h2>Nota:</h2>
        <p>Combina il movimento con l'attacco per combattere i nemici in tempo reale.</p>
      </div>,
    back: 
      <div>
        <h1>Comandi Speciali</h1>
        <p>Puoi usare il tasto <strong>"T"</strong> per teletrasportarti da una stanza all'altra nel dungeon.</p>
        <br></br>
        <p>Il tasto <strong>"E"</strong> per interagire con oggetti e persone circostanti,</p>
        <br></br>
        <p>Il tasto <strong>"Q"</strong> per cambiare velocemente le armi in tuo possesso.</p>
      </div>,
  },
  {
    front: 
      <div>
        <h1>Crediti</h1>
        <p>Un ringraziamento speciale a tutti gli sviluppatori, designer, artisti, musicisti e collaboratori che hanno contribuito a creare questo gioco.</p>  
        <br></br>        
        <p>Di seguito puoi trovare i dettagli di contatto degli sviluppatori.</p>

      </div>,
    back: 
      <div>
        <h1>Autori</h1>
          <p><strong>Cristian Pio Prudenzano</strong></p> 
          <p>ඞ Art Director, Scrittore e Art Designer</p>
          <br></br>
          <p><strong>Dzmitry Shpakouski</strong></p>
          <p> ඞ Sviluppatore</p>
          <br></br>
          <p><strong>Marco Mongelli</strong></p> 
          <p>ඞ Sviluppatore, Game Designer e Art Designer</p>
      </div>,
  },
  {
    front: <div></div>,
    back: <div></div>,
  },
];



  const renderPapers = () => {
    const bookmarks = {
      2: "inventario-codex-bookmark.png",
      3: "armi-codex-bookmark.png",
      4: "tesori-codex-bookmark.png",
      5: "bestiario-codex-bookmark.png",
      6: "boss-codex-bookmark.png",
    };

    return pages.map((_, index) => {
      const pageNum = index + 1;
      const flipped = currentState > pageNum;
      const zIndex = flipped ? pageNum : numOfPapers - index;
      const bookmark = bookmarks[pageNum];

      return (
        <div
          key={index}
          className={`paper ${flipped ? "flipped" : ""}`}
          id={`p${pageNum}`}
          style={{ zIndex }}
        >
          <div className="front">
            <div className="front-content">
              {pages[index].front}
              {bookmark && (
                <div
                  className="bookmark-button"
                  onClick={() => goToPageSmoothly(pageNum + 1)}
                  style={{
                    backgroundImage: `url('../assets/${bookmark}')`,
                    position: "absolute",
                    top: `${10 + (pageNum - 2) * 13}%`,
                    left: "98%",
                    width: "20%",
                    height: "10%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: "10px",
                    cursor: "pointer",
                    zIndex: 2,
                  }}
                />
              )}
            </div>
          </div>
          <div id="codex" className="back">
            <div className="back-content">{pages[index].back}</div>
          </div>
        </div>
      );
    });
  };

  const bookTransform =
    currentState === 1
      ? "translateX(0%)"
      : currentState === maxState
      ? "translateX(100%)"
      : "translateX(50%)";

  return (
    <div className={`book-container ${currentState > 1 && currentState < maxState ? 'book-open' : ''}`}>
      <button
        id="prev-btn"
        onClick={goPrevious}
        className={`nav-btn prev ${currentState > 1 ? "shifted" : ""}`}
      >
        <img src={backArrow} alt="back-arrow" />
      </button>

      <div id="book" className="book" style={{ transform: bookTransform }}>
        {renderPapers()}
      </div>

      <button
        id="next-btn"
        onClick={goNext}
        className={`nav-btn next ${currentState < maxState ? "shifted" : ""}`}
      >
        <img src={nextArrow} alt="next-arrow" />
      </button>
    </div>
  );
};

export default FlipBook;
