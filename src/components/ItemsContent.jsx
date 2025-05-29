// src/pages/ItemsContent.jsx
import '../styles/ItemsContent.css';

export const FrontItems = () => (
  <div>
    <h2>Tesoro</h2>
    <p>Descrizione del tesoro scoperto.</p>
  </div>
);




export const BackItems = () => (
  <div className="items-content">
    <h2 className="treasure-title">Tesori</h2>
    <div className="treasure-grid-scroll-container">
      <div className="treasure-grid-container">
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} className="treasure-tile" />
        ))}
      </div>
    </div>
  </div>
);
