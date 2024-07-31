import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();

      if (responseData && responseData.products) {
        setProducts(responseData.products);
        console.log("Product", responseData);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={"product-list-container"}>
        <h1 className={"product-list-title"}>Product List</h1>

        {/* 1 */}
        {/* <ul className={"product-list"}>
          {products && products.length
            ? products.map((product) => (
                <li key={product.id} className={"product"}>
                  <img src={product.thumbnail} alt={product.title} />
                  <span style={{ fontWeight: "bold" }}>{product.title}</span>
                </li>
              ))
            : "Loading..."}
        </ul> */}
        
        {/* 2 */}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <ul className="product-list">
            {products.map((product) => (
              <li key={product.id} className="product">
                <img src={product.thumbnail} alt={product.title} />
                <p style={{ fontWeight: "bold" }}>{product.title}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default ProductList;
