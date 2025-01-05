/*
Debounce is a term used to kind of adding a delay in an action
*/

import React, { useEffect, useState } from "react";

// 1. Make custome hook for debounce useDebounce
const useDebounce = (text, delay) => {
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]); //want to call this useEffect when the user type aur delay between typing

  return debounce;
};

export const UseDebounce = () => {
  const [text, setText] = useState("");
  const debounceText = useDebounce(text, 1000);
  return (
    <>
      <div>
        <h2>Debounce custom hook tester</h2>
        <input
          type="text"
          placeholder="Try Someting"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/* <p>Debounce Check - {text} </p> -- show text as we type   */}
        <p>Debounce Check - {debounceText} </p>
        {/* here after a certain delay (as we define) the text is shown */}
      </div>
    </>
  );
};
