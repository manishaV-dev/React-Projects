import React, { useRef, useState } from "react";
import "./timer.css";

const TimeFactor = {
  Hour: "hh",
  Minute: "mm",
  Seconds: "ss",
  MilliSeconds: "ms",
};

const Config = {
  [TimeFactor.Hour]: {
    value: "",
    factor: 60 * 60 * 1000,
    placeholder: "HH",
  },
  [TimeFactor.Minute]: {
    value: "",
    factor: 60 * 1000,
    placeholder: "MM",
  },
  [TimeFactor.Seconds]: {
    value: "",
    factor: 1000,
    placeholder: "SS",
  },
  //   [TimeFactor.MilliSeconds]: {
  //     value: "",
  //     factor: 1,
  //     placeholder: "ms",
  //   },
};

const OrderOfTime = [TimeFactor.Hour, TimeFactor.Minute, TimeFactor.Seconds];

const Timer = () => {
  const [config, setConfig] = useState(structuredClone(Config)); // structuredClone -- for making deep copy

  const [time, setTime] = useState(0);

  const intervalRef = useRef(null);
  const timeSpanRef = useRef(0);

  function handleChange({ key }) {
    return (e) => {
      const newConfig = structuredClone(config);
      newConfig[key].value = e.target.value;
      setConfig(newConfig);
    };
  }

  function handleStart() {
    // convert entered time in ms
    let totalTimeInMs = 0;

    OrderOfTime.forEach((key) => {
      const data = config[key];
      const value = data.value;
      const factor = data.factor;

      if (value && !isNaN(value)) {
        totalTimeInMs += Number(value) * factor;
      }
    });

    // start the timer
    timeSpanRef.current = Date.now() + totalTimeInMs;
    intervalRef.current = setInterval(() => {
      setTime(() => timeSpanRef.current - new Date().getTime());
    }, 10);
  }

  function handlePause() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
    timeSpanRef.current = 0;
    setConfig(structuredClone(Config));
  }

  function formattedTime() {
    const ms = Math.floor((time % 1000) / 10); // 1234 -> is 234ms/10 2.34
    const mm = Math.floor((time / (60 * 1000)) % 60);
    const ss = Math.floor((time / 1000) % 60);
    const hh = Math.floor(time / (60 * 60 * 1000));

    return `${hh} : ${mm} : ${ss} : ${ms}`;
  }

  return (
    <>
      <div className="timer">
        <div className="text-fields">
          {OrderOfTime.map((orderKey, index) => {
            const data = config[orderKey];
            // console.log(data)
            return (
              <div key={orderKey}>
                <input
                  type="text"
                  placeholder={data.placeholder}
                  value={data.value}
                  onChange={handleChange({ key: orderKey, index })}
                />
              </div>
            );
          })}
        </div>

        <h3>{formattedTime()}</h3>
        <div className="buttons">
          <button onClick={handleStart}>&#9654; Play</button>
          <button onClick={handlePause}>&#x23f8; Pause</button>
          <button onClick={handleReset}>&#x23f1; Reset</button>
        </div>
      </div>
    </>
  );
};

export default Timer;

/*
Requirement - 

1. user shoulf be able to enter hour minute and seconds
2. User should be able to start pause and reset
3. On completion show a message and start again button
4. Timer should be highly configureable days months seconds milliseconds can be added on demand
5. Provide a list of items to select from to enter values quickly
*/
