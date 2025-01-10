import React, { useEffect, useRef, useState } from "react";
import "./digital.css";

function WithoutSetInterval() {
  const [clock, setClock] = useState(new Date());
  const requestRef = useRef();

  const updateClock = () => {
    setClock(new Date()); // Updates the state with the current time
    requestRef.current = requestAnimationFrame(updateClock); // Requests the next animation frame
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateClock); // Starts the animation loop by invoking updateClock using requestAnimationFrame.
    return () => cancelAnimationFrame(requestRef.current); // Cleanup on unmount  to avoid memory leaks.
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



/*

Why Use requestAnimationFrame?
    1 - Performance: requestAnimationFrame synchronizes updates with the screen's refresh rate, making it more efficient than setInterval.

    2 - Accuracy: Reduces potential drift issues (small timing inaccuracies) compared to setInterval or setTimeout.

    3 - Smoothness: Optimized for animations and UI updates, ensuring consistent rendering.

    --------------------------------------------------------- 

How It Works

    1. When the component mounts, useEffect schedules the first call to updateClock using requestAnimationFrame.

    2. updateClock updates the time in the state and requests the next animation frame recursively.

    3. The updated clock state triggers a re-render, displaying the current time.

    4. When the component unmounts, the cancelAnimationFrame cleanup ensures that no further updates occur.








*/