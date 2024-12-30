import React from "react";

function ProductDetails() {
  return (
    <>
      <div className="product">
        <img src="../assets/cake.png" alt="" />
        <div className="product-about">
          <h4>Cream Cake</h4>
          <p className="price">$ 19.90</p>
        </div>

        <p className="product-details">
          Lorem ipsum dolor sit amet sit amet sit
        </p>

        <button>Add to cart</button>
      </div>
    </>
  );
}

export default ProductDetails;
