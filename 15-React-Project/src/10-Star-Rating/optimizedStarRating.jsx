import React, { useState, useCallback, useMemo } from "react";

const NUMBER_OF_STARS = 5;

const StarRatingOptimized = ({ numberOfStar = NUMBER_OF_STARS }) => {
  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  // Memoizing the stars array to prevent re-creation on re-renders
  const starsArray = useMemo(
    () => Array.from({ length: numberOfStar }),
    [numberOfStar]
  );

  // Memoized event handlers
  const handleClick = useCallback((index) => setStarValue(index + 1), []);
  const handleHover = useCallback((index) => setHoverValue(index + 1), []);
  const handleLeave = useCallback(() => setHoverValue(0), []);

  // Helper function to check if a star should be filled
  const isStarFilled = (index) =>
    hoverValue ? index < hoverValue : index < starValue;

  return (
    <div className="star-container">
      {starsArray.map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          onMouseMove={() => handleHover(index)}
          onMouseLeave={handleLeave}
        >
          <span className={isStarFilled(index) ? "allStar" : ""}>&#x2605;</span>
        </button>
      ))}
    </div>
  );
};

export default StarRatingOptimized;
