import React, { useState } from "react";
import "./counter.css";

const DateCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <>
      <h2>Display Date using useState</h2>
      <div className="container">
        <div className="date-container">
          <div className="step-container">
            <input
              type="range"
              min="0"
              max="10"
              className="range-input"
              value=""
            />
            <span className="step-label">Step : {step}</span>
          </div>

          <div className="counter-container">
            <button className="btn">-</button>
            <input type="text" className="counter-input" value="" />
            <button className="btn">+</button>
          </div>

          <p className="date-display">
            <span></span>
            <span></span>
          </p>

          <div>
            <button className="btn reset-btn">Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateCounter;
