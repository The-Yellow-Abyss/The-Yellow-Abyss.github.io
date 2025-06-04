// src/pages/ItemsContent.jsx
import '../styles/InventoryContent.css';
import frame from '../codex/content-image-frame-codex.png';
import { useRef } from 'react';

function FrontInventory({ item }) {
  return (
    <div className="inventory-item-content">
      <div className="inventory-item-image-content">
        <img src={item.image} alt={item.title} className="inventory-item-image" />
        <img src={frame} alt="Frame" className="image-frame" />
      </div>
      <div className="inventory-item-title-description-wrapper">
        <div className="inventory-item-title-content">
          <h1>{item.title}</h1>
        </div>
        <div className="inventory-item-description-content">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

function BackInventory({ inventory, onSelect }) {
  const character = inventory.find(item => item.id === 'character');
  const weapons = inventory.filter(item => item.id === 'weapon');
  const treasures = inventory.filter(item => item.id === 'treasure');

  const renderRow = (items, fallbackCount = 3) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
      if (scrollRef.current) {
        const scrollAmount = direction === 'left' ? -150 : 150;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    const totalSlots = Math.max(items.length, fallbackCount);

    return (
    <div className="inventory-scroll-box">        
        <button className="scroll-arrow left" onClick={() => scroll('left')}></button>
        <div className="inventory-row-list-container">
            <div className="inventory-row-scroll-container" ref={scrollRef}>
            {Array.from({ length: totalSlots }).map((_, index) => (
                <div
                key={index}
                className="inventory-tile"
                onClick={() => {
                    if (index < items.length) onSelect(items[index]);
                }}
                >
                {index < items.length ? (
                    <img
                    src={items[index].image}
                    alt={`oggetto-${index}`}
                    className="inventory-image"
                    />
                ) : (
                    <span className="question-mark">?</span>
                )}
                </div>
            ))}
            </div>
        </div>        
      <button className="scroll-arrow right" onClick={() => scroll('right')}></button>
      </div>
    );
  };

  return (
    <div className="inventory-content">
      <h2 className="inventory-title">Inventario</h2>

      {/* Character container */}
      <div className="inventory-character-container">
        {character ? (
          <div>
            <div className="inventory-character-tile" onClick={() => onSelect(character)}>
              <img src={character.image} alt="Character" className="inventory-image" />
            </div>
            <div className="inventory-character-tile-dialogue">
              {character.dialogue_image && (
                <img
                  src={character.dialogue_image}
                  alt="Dialogue"
                  className="inventory-dialogue-image"
                />
              )}
            </div>
          </div>
        ) : (
          <div className="inventory-tile">
            <span className="question-mark">?</span>
          </div>
        )}
      </div>


      {/* Weapons scroll row */}
      <div className="inventory-section-title">Armi</div>
      {renderRow(weapons)}

      {/* Treasures scroll row */}
      <div className="inventory-section-title">Tesori</div>
      {renderRow(treasures)}
    </div>
  );
}

export { FrontInventory, BackInventory };
