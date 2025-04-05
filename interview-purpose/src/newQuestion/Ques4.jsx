import React, { useEffect, useRef } from "react";

const Ques4 = () => {
  const inputRef = useRef();

  function handleClick() {
    // Accessing the input field value
    console.log(inputRef.current.value);
    // Modifying the input field value
    inputRef.current.value = "New Value";
  }

//   would Focus to the input field on intial render
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Ques4;
