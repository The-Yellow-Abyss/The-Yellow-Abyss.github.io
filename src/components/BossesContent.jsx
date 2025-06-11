// src/pages/BossesContent.jsx
import '../styles/BossesContent.css';
import frame from '../codex/content-image-frame-codex.png';

function FrontBosses({ boss }) {
  const isPlaceholder = !boss;

 return (
     <div className="boss-content">
       <div className="boss-image-content">
         <img src={boss.image} alt={boss.title} className="boss-image" />
         <img src={frame} alt="Frame" className="image-frame" />
       </div>
       <div className="boss-title-description-wrapper">
         <div className="boss-title-content">
           <h1>{boss.title}</h1>
         </div>
         <div className="boss-description-content">
          <div className="boss-description">
            <p>{boss.description}</p>
          </div>
         </div>
       </div>
     </div>
   );
}

function BackBosses({ bosses, onSelect }) {
  return (
    <div className="bosses-content">
      <h2 className="bosses-title">Bosses</h2>
      <div className="bosses-grid-scroll-container">
        <div className="bosses-grid-container">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="bosses-tile"
              onClick={() => {
                if (index < bosses.length) onSelect(bosses[index]);
              }}
            >
              {index < bosses.length ? (
                <img
                  src={bosses[index].symbol}
                  alt={`boss-${index}`}
                  className="bosses-image"
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

export { FrontBosses, BackBosses };
