import React, { useEffect, useState } from "react";

const Throttling = () => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ height: "100rem" }}>
        <div style={{ position: "fixed", top: "0rem" }}>
          <h1>Throttling in Action</h1>
          <hr />
          <h2>Normal : {top} </h2>
          <hr />
          <h2>Throttled: </h2>
        </div>
      </div>
    </>
  );
};

export default Throttling;
