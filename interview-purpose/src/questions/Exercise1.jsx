import React from "react";

const items = ["item1", ["nested item 1.1", "nested item 1.2"], "item 2"];

function FlattenedList(props) {
  const items = props.items;
  const flattenItem = items.flat()
  return (
    <ul>
      {flattenItem.map((item, index) => (
        <li key={index}> {item} </li>
      ))}
    </ul>
  );
}

const Exercise1 = () => {
  return (
    <div>
      <FlattenedList items={items} />
    </div>
  );
};

export default Exercise1;
