import React, { useEffect, useState } from "react";

const Exercise4 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevcount) => prevcount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{count}</div>;
  //   0 1 2 3 .......
};

export default Exercise4;
