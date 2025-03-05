import React, { useState } from "react";

const Exercise3 = () => {
  const [text, setText] = useState("Hello");

  const handleClick = () => {
    setText(text + "World");
    setText("React");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h1>{text}</h1>  
      {/* Initially ==> Hello and then after clicking it shows React*/}
    </div>
  );
};

export default Exercise3;
