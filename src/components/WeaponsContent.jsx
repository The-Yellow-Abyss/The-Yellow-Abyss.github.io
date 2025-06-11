// src/pages/ItemsContent.jsx
import '../styles/WeaponsContent.css';
import frame from '../codex/content-image-frame-codex.png';

function FrontWeapons({ weapon }) {
  return (
    <div className="weapon-content">
      <div className="weapon-image-content">
        <img src={weapon.image} alt={weapon.title} className="weapon-image" />
        <img src={frame} alt="Frame" className="image-frame" />
      </div>
      <div className="weapon-title-description-wrapper">
        <div className="weapon-title-content">
          <h1>{weapon.title}</h1>
        </div>
        <div className="weapon-description-content">
          <div className="weapon-description">
            <p>{weapon.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackWeapons({ weapons, onSelect }) {
  return (
    <div className="weapons-content">
      <h2 className="weapons-title">Armi</h2>
      <div className="weapons-grid-scroll-container">
        <div className="weapons-grid-container">
          {Array.from({ length: 32 }).map((_, index) => (
            <div
              key={index}
              className="weapons-tile"
              onClick={() => {
                if (index < weapons.length) onSelect(weapons[index]);
              }}
            >
              {index < weapons.length ? (
                <img
                  src={weapons[index].image}
                  alt={`arma-${index}`}
                  className="weapons-image"
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

export { FrontWeapons, BackWeapons };
