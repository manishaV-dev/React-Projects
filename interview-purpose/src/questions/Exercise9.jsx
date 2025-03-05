import React, { useEffect, useState } from "react";

const Exercise9 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function handleResize() {
      setCount(count + 1);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{count}</div>;
  //   0 1
};

export default Exercise9;
