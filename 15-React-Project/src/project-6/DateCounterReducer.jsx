import React, { useReducer } from "react";
import "./counter.css";

const initialState = {
  count: 0,
  step: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "setStep":
      return {
        ...state,
        step: action.payload,
      };

    case "dec":
      return {
        ...state,
        count: state.count - state.step,
      };

    case "inc":
      return {
        ...state,
        count: state.count + state.step,
      };

    case "setCount":
      return {
        ...state,
        count: action.payload,
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

const DateCounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, count } = state;

  const date = new Date("25 Nov 2025");
  date.setDate(date.getDate() + count);

  return (
    <>
      <h2>Display Date using useReducer</h2>
      <div className="container">
        <div className="date-container">
          <div className="step-container">
            <input
              type="range"
              min="0"
              max="10"
              className="range-input"
              value={step}
              onChange={(e) =>
                dispatch({ type: "setStep", payload: +e.target.value })
              }
            />
            <span className="step-label">Step : {step}</span>
          </div>

          <div className="counter-container">
            <button className="btn" onClick={() => dispatch({ type: "dec" })}>
              -
            </button>
            <input
              type="text"
              className="counter-input"
              value={count}
              onChange={(e) =>
                dispatch({ type: "setCount", payload: +e.target.value })
              }
            />
            <button className="btn" onClick={() => dispatch({ type: "inc" })}>
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
              <button
                className="btn reset-btn"
                onClick={() => dispatch({ type: "reset" })}
              >
                Reset
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default DateCounterReducer;
