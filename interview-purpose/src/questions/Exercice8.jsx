import React, { useEffect, useState } from "react";

const Exercice8 = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue(value + 1);
    //   setValue(prev => prev + 1); for continous updating
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>{value}</div>;
  //   0 1 ---> because we are not storing prev data
};

export default Exercice8;
