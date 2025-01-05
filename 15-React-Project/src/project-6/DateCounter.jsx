import React, { useState } from "react";
import "./counter.css";

const DateCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("25 Nov 2025");
  //   console.log(date);
  date.setDate(date.getDate() + count);
  //   console.log(date);

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

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
              value={step}
              onChange={(e) => setStep(+e.target.value)}
            />
            <span className="step-label">Step : {step}</span>
          </div>

          <div className="counter-container">
            <button className="btn" onClick={() => setCount((c) => c - step)}>
              -
            </button>
            <input
              type="text"
              className="counter-input"
              value={count}
              onChange={(e) => setCount(+e.target.value)}
            />
            <button className="btn" onClick={() => setCount((c) => c + step)}>
              +
            </button>
          </div>

          <p className="date-display">
            <span>
              {count === 0
                ? "Today is"
                : count > 0
                ? `${count} days from today is`
                : `${Math.abs(count)} days ago was`}{" "}
              {/* // to ignore the negative number */}
            </span>
            <span>{date.toDateString()}</span>
          </p>

          <div>
            {count !== 0 || step !== 1 ? (
              <button className="btn reset-btn" onClick={handleReset}>
                Reset
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default DateCounter;
