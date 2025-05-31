import React, { useState } from "react";
import "../styles/lorecodex.css";

import {
  Page1, Page2, Page3, Page4, Page5,
  Page6, Page7, Page8, Page9, Page10,
  Page11, Page12, Page13, Page14, Page15,
  Page16,Page17,Page18
} from "./LorePages";


import backArrow from "../assets/back-arrow.png";
import nextArrow from "../assets/next-arrow.png";

const LoreCodex = () => {
  const [currentState, setCurrentState] = useState(1);

  const numOfPapers = 7;
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
  { front: <div></div>, back:<div></div>  },
  { front: <Page1 />, back: <Page2 /> },
  { front: <Page3 />, back: <Page4 /> },
  { front: <Page5 />, back: <Page6 /> },
  { front: <Page7 />, back: <Page8 /> },
  { front: <Page9 />, back: <Page10 /> },
  { front: <div></div>, back:<div></div>}
];




  const renderPapers = () => {
  return pages.map((_, index) => {
    const pageNum = index + 1;
    const flipped = currentState > pageNum;
    const zIndex = flipped ? pageNum : numOfPapers - index;

    return (
      <div
        key={index}
        className={`paper ${flipped ? "flipped" : ""}`}
        id={`pl${pageNum}`}
        style={{ zIndex }}
      >
        <div className="front">
          <div className="front-content">
            {pages[index].front}
          </div>
        </div>
        <div className="back">
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

export default LoreCodex;
