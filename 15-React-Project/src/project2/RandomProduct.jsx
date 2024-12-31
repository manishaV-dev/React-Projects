import React, { useEffect, useState } from "react";
import "./product.css";

function RandomProduct() {
  const [productTitle, setProductTitle] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("Failed to fetch products");

      const data = await response.json();
      //   console.log(data);

      const randomNum = Math.floor(Math.random() * data.length);
      //   console.log(randomNum);

      const randomProduct = data[randomNum];
      //   console.log(randomProduct);

      setProductTitle(randomProduct.title);
      setProductImage(randomProduct.image);
      setError(null); // Clear any previous error
    } catch (error) {
      console.log("Something went wrong", error);
      setError("Unable to fetch product. Please try again.");
    } finally {
      setLoading(false);
    }

    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h2>Generate Random Product</h2>
      <div className="product-container">
        <div className="product">
          {error && <p className="error-message">{error}</p>}
          <h5 className="title">{productTitle}</h5>
          {productImage && <img src={productImage} alt={productTitle} />}
          <p className="count">
            You have seen {count} product{count !== 1 && "s"}
          </p>
          {loading ? (
            <button>Loading...</button>
          ) : (
            <button onClick={getProduct}>Generate random product</button>
          )}
        </div>
      </div>
    </>
  );
}

export default RandomProduct;
