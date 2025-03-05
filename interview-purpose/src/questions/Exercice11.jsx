import React, { useState } from "react";

const Exercice11 = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const handleClick = () => {
    const newItems = items; // newItems is assigned the reference of items (not a new array).
    newItems.push(4);
    setItems(newItems); // React does not detect this change because setItems(newItems); is setting the same reference.
  };

  //   Since React does a shallow comparison (prevState === newState), it does not trigger a re-render.

  return (
    <div>
      <button onClick={handleClick}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercice11;


// to fix this

// import React, { useState } from "react";

// const Exercice11 = () => {
//   const [items, setItems] = useState([1, 2, 3]);

//   const handleClick = () => {
//     setItems((prevItems) => [...prevItems, 4]); // Using functional update
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Add Item</button>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Exercice11;
