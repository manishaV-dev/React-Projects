import React, { useState, useEffect } from "react";

const Ques3 = () => {
  const [count, setCount] = useState(0);


  useEffect(() => {
    // This effect will run whenever the 'count' state changes
    console.log("Count has changed!");
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Ques3;
