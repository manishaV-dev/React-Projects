import React from "react";
import ProductDetails from "./ProductDetails";
import { products } from "./Products";

function ProductContainer() {
  return (
    <>
      <main>
        {products && products.length > 0 ? (
          <section className="products">
            {products.map((product, index) => (
              <ProductDetails productObj={product} key={index} />
            ))}
          </section>
        ) : (
          <p>No Product Available</p>
        )}
      </main>
    </>
  );
}

export default ProductContainer;
