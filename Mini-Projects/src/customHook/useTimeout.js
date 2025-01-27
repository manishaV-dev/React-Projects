/*
Create a hook to easily use setTimeout(callback, delay)

1. Reset the timer if delay changes
2. Do not reset the timer if only callback changes

*/

import { useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback; // referring to the updated callback

  useEffect(() => {
    const timerId = setTimeout(callbackRef.current, delay);
    return () => {
      clearTimeout(timerId);
    };
  }, [delay]);
}
