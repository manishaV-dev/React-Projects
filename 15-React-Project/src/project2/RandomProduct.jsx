import React, { useState } from "react";

function RandomProduct() {
  const [productTitle, setProductTitle] = useState([]);
  const [productImage, setProductImage] = useState(null);
  const [count, setCount] = useState(0);

  const getProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      //   console.log(data);

      const randomNum = Math.floor(Math.random() * data.length);
      //   console.log(randomNum);

      const randomProduct = data[randomNum];
      //   console.log(randomProduct);

      setProductTitle(randomProduct.title);
      setProductImage(randomProduct.image);
    } catch (error) {
      console.log("Something went wrong", error);
    }

    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h2>Generate Random Product</h2>
      <div className="product">
        <h3 className="title">{productTitle}</h3>
        <img src={productImage} alt={productTitle} />

        <p className="count">You have seen {count} product</p>

        <button onClick={getProduct}>Add to cart</button>
      </div>
    </>
  );
}

export default RandomProduct;
