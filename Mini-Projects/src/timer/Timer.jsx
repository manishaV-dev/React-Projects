import React, { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      const time = setTimeout(() => setTimer((prev) => prev - 1), 1000);
      return () => clearTimeout(time);
    }
  }, [timer]);

  return (
    <>
      <h3 style={{ marginBottom: "30px" }}>
        Build a timer that counts down from a specified time.
      </h3>

      <p>{timer === 0 ? <p>Times Up!! 😥</p> : <p>Time Left : {timer} Sec</p>}</p>
    </>
  );
}

export default Timer;
