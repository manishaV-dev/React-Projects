import React from "react";

function ListComponent() {
  const items = ["Apple", "Banana", "Kiwi", "Guava", "Carrot"];

  return (
    <>
      <h3 style={{ marginBottom: "30px" }}>
        Build a list component to display a list of items
      </h3>

      <ul>
        {items.map((item, index) => (
          <li key={index}> {index + 1} - {item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListComponent;
