import React, { useEffect, useRef, useState } from "react";
import "./digital.css";

function WithoutSetInterval() {
  const [clock, setClock] = useState(new Date());
  const requestRef = useRef();

  const updateClock = () => {
    setClock(new Date());
    requestRef.current = requestAnimationFrame(updateClock);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateClock);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <>
      <div className="digital-clock">
        <h3>{clock.toLocaleTimeString()}</h3>
      </div>
    </>
  );
}

export default WithoutSetInterval;

// Interviewer - I don't like setInterval, could you please give me digital clock which does not uses setInterval and will remain sync with my fresh rate

// Yes we can manage it with the help of "requestAnimationFrame" instead of setTimeout and setInterval

// setTimeout or setInterval runs with fixed set of time like 1000ms , 2000ms etc but requestAnimationFrame only update the UI when it is needed based on refresh rate. and this is the optimize way to create digital clock eg - when creating stock related website time played major role
