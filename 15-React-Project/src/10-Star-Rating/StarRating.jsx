import React, { useState } from "react";

const NUMBER_OF_STARS = 5;
const StarRating = ({ numberOfStar = NUMBER_OF_STARS }) => {
  const [starValue, setStarValue] = useState(0);
  // console.log(starValue); // get clicked star index
  const [hoverValue, setHoverValue] = useState(0);
  // console.log(hoverValue); // get hovered star index

  return (
    <div className="star-container">
      {[...new Array(numberOfStar)].map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => setStarValue(index + 1)}
            onMouseEnter={() => setHoverValue(index + 1)}
            onMouseLeave={() => setHoverValue(0)}
          >
            <span
              className={
                (hoverValue == 0 && index < starValue) || index < hoverValue
                  ? "allStar"
                  : ""
              }
            >
              &#x2605;
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;

// {/* //when we create Array by using new , index is not initialized so for
//       initialization we have to destructure it */}

// map((_, index) -- when you don't need the value only need index then can you uderScore(_)


/*

hoverValue == 0 && index < starValue) || index < hoverValue
hoverValue == 0 , suppose we select 4 star and again if we hover like 2 or 3 position star it should change color and when we click it change from 4 to like 2 or 3 

*/