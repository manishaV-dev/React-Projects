import { useEffect, useRef, useState } from "react";

export default function useThrottle(value, delay) {
  const [throttleValue, setThrottleValue] = useState(value);
  const flagRef = useRef(true); // memories its prev value and not call on re-render

  useEffect(() => {
    if (flagRef.current) {
      // if flagref true hai to setThrollted me value set and then make flagRef to false
      setThrottleValue(value);
      flagRef.current = false;

      setTimeout(() => {
        // and after a certain delay (as defined in component) make flagRef to true
        flagRef.current = true;
      }, delay);
    }
  }, [value, delay]);

  return throttleValue;
}
