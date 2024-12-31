import React from "react";
import ProductDetails from "./ProductDetails";
import { products } from "./Products";

function ProductContainer() {
  return (
    <>
      <main>
        <section className="products">
          {products.map((product, index) => (
            <ProductDetails productObj={product} key={index} />
          ))}
        </section>
      </main>
    </>
  );
}

export default ProductContainer;
