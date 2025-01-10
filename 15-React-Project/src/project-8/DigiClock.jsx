import React, { useEffect, useState } from "react";
import "./digital.css";

function DigiClock() {
  const [clock, setClock] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setClock((prev) => prev + 1);
    }, 1000);
  }, []);

  function getDate() {
    const date = new Date();
    let result = "";
    let hour = String(date.getHours()).padStart(2, 0);
    const minute = String(date.getMinutes()).padStart(2, 0); // add 0 from start if value is less than 10 making it in form of 2 digit
    const second = String(date.getSeconds()).padStart(2, 0);
    const ampm = hour > 12 ? "PM" : "AM";

    // to get 12 hour format
    // if left hand value is zero than assign it 12
    hour = hour % 12 || 12;

    result = `${hour}:${minute}:${second} ${ampm}`;

    return result;
  }

  return (
    <>
      <div className="digital-clock">
        <h3>{getDate()}</h3>
      </div>
    </>
  );
}

export default DigiClock;
