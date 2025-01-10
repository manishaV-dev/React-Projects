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


/*

Issue with using toLocaleTimeString

1. Performance issue -- It do very expensive calculation - it does not cached result -- if your project is heavy than it is not good way to use clock

2. Format issue -- if you change time zone like Mumbai n all it show diff time format so it is not good for User Experience


*/