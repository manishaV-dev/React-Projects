import React, { useState } from "react";

const SearchFilter = () => {
  const fruits = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Cranberry",
    "Date",
    "Dragonfruit",
    "Elderberry",
    "Fig",
    "Grape",
    "Grapefruit",
  ];

  //   1. Need state where store our fruits array
  const [fruitData, setFruitData] = useState(fruits);

  //   3. Make Input as controlled element so when user type it update its state and show result
  const [searchInput, setSearchInput] = useState("");

  //   4.
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    // console.log(searchInput);
  };

  //   5. Make copy of fruitData and filter out accoring to user input
  const fruitDataFiltered = fruitData.filter((fruit) =>
    // first make all fruit data in lowercase fruit.toLocaleLowerCase()
    // and what we get by include(searchInput) make them in lowerCase also
    fruit.toLocaleLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search Here...."
          onChange={handleInputChange}
        />

        {/* 2.. Map the FruitData so that we can see it in UI */}
        {/* {fruitData.map((fruit) => (
          <p>{fruit}</p>
        ))} */}

        {/* 6 */}
        {fruitDataFiltered.map((fruit) => (
          <p>{fruit}</p>
        ))}
      </div>
    </>
  );
};

export default SearchFilter;

// Question :

/*

1. Let an array of strings called fruits for example: ["apple", "cherry" etc] display this list in the UI

2. Use the provided input field
    As the user type into the input, filter the displayed list to include only those items that contain Real-time filtering

3. The list should update as soon as the user type into the search box, without needing to submit.

*/
