import React, { useState } from "react";

const Exercise5 = () => {
  const [state, setState] = useState({ count: 0 });

  const incrementCount = () => {
    setState((prev) => ({
      count: prev.count + 1,
    }));

    setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <h1>{state.count}</h1>
      {/* 0 2 4 6 ... */}
    </div>
  );
};

export default Exercise5;
