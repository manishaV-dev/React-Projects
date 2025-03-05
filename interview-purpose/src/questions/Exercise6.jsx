import React, { useState } from "react";

const Exercise6 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setTimeout(() => {
      alert(count);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h1> {count} </h1>
      {/* Whenever is closure is formed it only knows the previous value , here setTimeout form closure so it always return till the prev value.

      like if we click 4 times the count is 0 1 2 3 4
      but in alert which is define in setTimeout(closure) it return 0 1 2 3
      
      */}


    </div>
  );
};

export default Exercise6;
