import React, { useState } from "react";

function ToggleSwitch() {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <h3 style={{ marginBottom: "30px" }}>
        Implement a basic toggle switch component.
      </h3>
      <input type="checkbox" onChange={handleToggle} />
      <p>{isToggle ? "On" : "Off"}</p>
    </>
  );
}

export default ToggleSwitch;
