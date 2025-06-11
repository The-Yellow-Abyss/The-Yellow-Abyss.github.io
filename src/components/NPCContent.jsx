// src/pages/NPCContent.jsx
import '../styles/NPCContent.css';
import frame from '../codex/content-image-frame-codex.png';

function FrontNPC({ npc }) {
  const isPlaceholder = !npc;

 return (
     <div className="npc-content">
       <div className="npc-image-content">
         <img src={npc.dialogue_image} alt={npc.title} className="npc-image" />
         <img src={frame} alt="Frame" className="image-frame" />
       </div>
       <div className="npc-title-description-wrapper">
         <div className="npc-title-content">
           <h1>{npc.name}</h1>
         </div>
         <div className="npc-description-content">
          <div className="npc-description">
           <p>{npc.description}</p>
          </div>
         </div>
       </div>
     </div>
   );
}

function BackNPC({ npcs, onSelect }) {
  return (
    <div className="npcs-content">
      <h2 className="npcs-title">NPC</h2>
      <div className="npcs-grid-scroll-container">
        <div className="npcs-grid-container">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="npcs-tile"
              onClick={() => {
                if (index < npcs.length) onSelect(npcs[index]);
              }}
            >
              {index < npcs.length ? (
                <img
                  src={npcs[index].image}
                  alt={`npc-${index}`}
                  className="npcs-image"
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

export { FrontNPC, BackNPC };
