import React, { useState } from "react";

const Ques2 = () => {
  const [obj, setObj] = useState({
    firstName: "Manisha",
    lastName: "Gupta",
    address: {
      firstLine: "Test 1",
      secondLine: "Test 2",
    },
  });

  const [inputValue, setInputValue] = useState("");

  function handleChange() {
    setObj({
      ...obj,
      firstName: inputValue,
      address: { ...obj.address, secondLine: inputValue },
    });
  }

  return (
    <div>
      <h4>{obj.firstName}</h4>
      <h4>{obj.lastName}</h4>
      <h4>{obj.address.firstLine}</h4>
      <h3>{obj.address.secondLine}</h3>

      <input
        type="text"
        placeholder="Enter value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleChange}>Change Value</button>
    </div>
  );
};

export default Ques2;

// I have an input tag, I want that what user type in the input and then click on the change button the secondLine text should update accordingly , other object property should remain unchanged
