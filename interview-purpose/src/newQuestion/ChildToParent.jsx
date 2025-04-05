import React, { useState } from "react";

const ChildToParent = ({ onHandleChange }) => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    const newValue = e.target.value;
    setInput(newValue);
    onHandleChange(newValue);
  }

  return (
    <div>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default ChildToParent;
