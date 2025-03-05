import React, { useEffect, useState } from "react";

const Exercise2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1); // 1
  }, []);

  useEffect(() => {
    setCount(count + 2); // 2
  }, []);

  return <div>{count}</div>;
};

export default Exercise2;
