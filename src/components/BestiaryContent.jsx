// src/pages/BestiaryContent.jsx
import '../styles/BestiaryContent.css';
import frame from '../codex/content-image-frame-codex.png';

function FrontBestiary({ enemy }) {
  const isPlaceholder = !enemy;

 return (
     <div className="enemy-content">
       <div className="enemy-image-content">
         <img src={enemy.image} alt={enemy.title} className="enemy-image" />
         <img src={frame} alt="Frame" className="image-frame" />
       </div>
       <div className="enemy-title-description-wrapper">
         <div className="enemy-title-content">
           <h1>{enemy.title}</h1>
         </div>
         <div className="enemy-description-content">
           <p>{enemy.description}</p>
         </div>
       </div>
     </div>
   );
}

function BackBestiary({ enemies, onSelect }) {
  return (
    <div className="bestiary-content">
      <h2 className="bestiary-title">Bestiario</h2>
      <div className="bestiary-grid-scroll-container">
        <div className="bestiary-grid-container">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="bestiary-tile"
              onClick={() => {
                if (index < enemies.length) onSelect(enemies[index]);
              }}
            >
              {index < enemies.length ? (
                <img
                  src={enemies[index].image}
                  alt={`enemy-${index}`}
                  className="bestiary-image"
                />
              ) : (
                <span className="question-mark">?</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { FrontBestiary, BackBestiary };
