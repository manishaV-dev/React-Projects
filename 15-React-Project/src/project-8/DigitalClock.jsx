import React, { useEffect, useState } from "react";
import "./digital.css";

function DigitalClock() {
  const [clock, setClock] = useState(0);
  const date = new Date();

  useEffect(() => {
    setInterval(() => {
      setClock((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <>
      <div className="digital-clock">
        <h3>{date.toLocaleTimeString()}</h3>
      </div>
    </>
  );
}

export default DigitalClock;
