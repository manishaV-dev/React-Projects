import React from "react";
import ProductDetails from "./ProductDetails";

function ProductContainer() {
  return (
    <>
      <main>
        <section className="products">
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
        </section>
      </main>
    </>
  );
}

export default ProductContainer;
