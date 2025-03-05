import React, { useState } from "react";

const Exercise10 = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
  }; 
//   count value is {/* 0 1 2 3 4 .... */}


//   const handleIncrement = () => {
//     setCount(prev => prev + 1);
//     setCount(prev => prev + 1);
//   }; count value is {/* 0 2 4 6 8 ...  */}

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <h1>{count}</h1>
      
    </div>
  );
};

export default Exercise10;
