import React from "react";
import './timer.css'

const Timer = () => {
  return <>
  
  <div className="timer">
    <div className="text-fields">
        <input type="text" placeholder="HH" />
        <span>:</span>
        <input type="text" placeholder="MM" />
        <span>:</span>
        <input type="text" placeholder="SS" />
    </div>

    <div className="buttons">
        <button>&#9654; Play</button>
        <button>&#x23f8; Pause</button>
        <button>&#x23f1; Reset</button>
    </div>
  </div>
  </>;
};

export default Timer;

/*
Requirement - 

1. user shoulf be able to enter hour minute and seconds
2. User should be able to start pause and reset
3. On completion show a message and start again button
4. Timer should be highly configureable days months seconds milliseconds can be added on demand
5. Provide a list of items to select from to enter values quickly
*/
