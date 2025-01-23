import { useEffect } from "react";

export default function useClickOutside(elementRef, handler) {
  useEffect(() => {
    const cb = (e) => {
      if (!elementRef.current?.contains(e.target)) {
        // ye check kr rha hai ki modal pr click nhi hona chahiye agar aisa hai to handler ko call kr dena hai
        handler();
      }
    };
    document.addEventListener("click", cb); // otherwise jaha bhi click ho modal close ho jaye

    return () => {
      document.removeEventListener("click", cb);
    };
  }, [elementRef, handler]);
}
