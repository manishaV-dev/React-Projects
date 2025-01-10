import React, { useEffect, useState } from "react";
import "./digital.css";

function FixTimer() {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      setClock(new Date());
      const now = new Date();
      const delay = 1000 - (now % 1000);
      setTimeout(tick, delay);
    };

    const timeoutId = setTimeout(tick, 1000 - (new Date() % 1000)); // sync first call
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="digital-clock">
        <h3>{clock.toLocaleTimeString()}</h3>
      </div>
    </>
  );
}

export default FixTimer;


/*
now is the current time in millisecond (as a Date object)

  . now % 1000 gives the number of millisecond that have passed since the start of the current second

  . for example, if now is 12:34:56.786,
    now % 1000 gives 786, meaning that 786 millisecond have passed


*/