import React, { useState } from "react";

const Ques = () => {
  const [obj, setObj] = useState({
    firstName: "Manisha",
    lastName: "Gupta",
    address: {
      firstLine: "Test 1",
      secondLine: "Test 2",
    },
  });

  function handleChange() {
    setObj({ ...obj, address: { ...obj.address, secondLine: "Test 3" } });
  }

  return (
    <div>
      <h2>{obj.firstName}</h2>
      <h2>{obj.lastName}</h2>
      <h2>{obj.address.firstLine}</h2>
      <h2>{obj.address.secondLine}</h2>

      <button onClick={handleChange}>Change</button>
    </div>
  );
};

export default Ques;

// When click on a button, only secondLine text should be changed into other text, other object property should remain unchanged
