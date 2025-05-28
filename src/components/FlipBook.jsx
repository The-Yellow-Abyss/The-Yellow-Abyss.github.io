import React, { useState } from "react";
import "../styles/FlipBook.css";

import backArrow from "../assets/back-arrow.png";
import nextArrow from "../assets/next-arrow.png";
import backtrackingBtn from "../assets/backtracking-button.png";

const FlipBook = () => {
  const [currentState, setCurrentState] = useState(1);

  const numOfPapers = 11;
  const maxState = numOfPapers + 1;

  const pages = Array.from({ length: numOfPapers }, (_, i) => ({
    front: <div>Front {i + 1}</div>,
    back: <div>Back {i + 1}</div>,
  }));

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

  const goToPage = (target) => {
    if (target >= 1 && target <= numOfPapers) {
      setCurrentState(target);
    }
  };

  const renderPapers = () => {
    return pages.map((_, index) => {
      const flipped = currentState > index + 1;
      const zIndex = flipped ? index + 1 : numOfPapers - index;

      return (
        <div
          key={index}
          className={`paper ${flipped ? "flipped" : ""}`}
          id={`p${index + 1}`}
          style={{ zIndex }}
        >
          <div className="front">
            <div className="front-content">{pages[index].front}</div>
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

  const btnTransform =
    currentState === 1 || currentState === maxState
      ? "translateX(0px)"
      : "translateX(180px)";

  return (
    <div className="book-container">
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
