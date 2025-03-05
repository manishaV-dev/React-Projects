import React, { useEffect, useState } from "react";

const Exercise7 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (count === 5) {
      clearInterval(id);
    }
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      {/* id is not defined */}
    </div>
  );
};

export default Exercise7;
