import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrement(){
    setCounter((prev) => prev + 1)
  }

  function handleDecrement(){
    if(counter > 0){
        setCounter((prev) => prev - 1)
    }
  }

  return (
    <>
      <h1 style={{ marginBottom: "30px" }}>Counter App</h1>
      <h3 style={{ color: "yellowgreen", marginBottom: "20px" }}>
        Counter is : {counter}
      </h3>
      <button style={{ marginRight: "10px" }} onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default Counter;
