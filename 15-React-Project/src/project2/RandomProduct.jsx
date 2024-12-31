import React from "react";

function RandomProduct() {
  const getProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      //   console.log(data);

      const randomNum = Math.floor(Math.random() * data.length);
      //   console.log(randomNum);

      const randomProduct = data[randomNum];
      //   console.log(randomProduct);
      
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <>
      <h2>Generate Random Product</h2>
      <div className="product">
        <h3 className="title"></h3>
        <img src="" alt="" />

        <p className="count">You have seen 1 product</p>

        <button onClick={getProduct}>Add to cart</button>
      </div>
    </>
  );
}

export default RandomProduct;
