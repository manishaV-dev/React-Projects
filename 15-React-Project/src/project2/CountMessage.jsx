import React from "react";

function CountMessage({ count }) {
  return (
    <>
      <p className="count">
        You have seen {count} product{count !== 1 && "s"}
      </p>
    </>
  );
}

export default CountMessage;
