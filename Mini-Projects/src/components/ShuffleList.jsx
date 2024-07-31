import React, { useState } from "react";

function ShuffleList() {
  const [items, setItems] = useState([
    "Banana",
    "Orange",
    "Melon",
    "Kiwi",
    "Papaya",
  ]);

  /*
Logic -- Traverse over the list of items and for each particular item I'll genarate a random index and swap that particular item with that particular index. and set state again.

    */
  const handleShuffle = () => {
    const itemsShallowCopy = [...items];

    // reverse loop
    for (let i = itemsShallowCopy.length - 1; i > 0; i--) {
      // generate random index
      const j = Math.floor(Math.random() * (i + 1));
      console.log(j);
      // swap two items
      [itemsShallowCopy[i], itemsShallowCopy[j]] = [
        itemsShallowCopy[j],
        itemsShallowCopy[i],
      ];
    }
    setItems(itemsShallowCopy);
  };

  return (
    <>
      <div className="list-box">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button className="submitBtn" onClick={handleShuffle}>
          Shuffle List
        </button>
      </div>
    </>
  );
}

export default ShuffleList;
