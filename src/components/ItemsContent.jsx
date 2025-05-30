// src/pages/ItemsContent.jsx
import '../styles/ItemsContent.css';
import frame from '../codex/content-image-frame-codex.png';
import { treasures } from '../data/items';

function FrontItems({ item }) {
  return (
    <div className="item-content">
      <div className="item-image-content">
        <img src={item.image} alt={item.title} className="item-image" />
        <img src={frame} alt="Frame" className="image-frame" />
      </div>
      <div className="item-title-description-wrapper">
        <div className="item-title-content">
          <h1>{item.title}</h1>
        </div>
        <div className="item-description-content">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

function BackItems({ treasures, onSelect }) {
  return (
    <div className="items-content">
      <h2 className="treasure-title">Tesori</h2>
      <div className="treasure-grid-scroll-container">
        <div className="treasure-grid-container">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="treasure-tile"
              onClick={() => {
                if (index < treasures.length) onSelect(treasures[index]);
              }}
            >
              {index < treasures.length ? (
                <img
                  src={treasures[index].image}
                  alt={`tesoro-${index}`}
                  className="treasure-image"
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

export { FrontItems, BackItems };
