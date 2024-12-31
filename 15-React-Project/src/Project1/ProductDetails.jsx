import React from "react";

function ProductDetails({ productObj }) {
  // console.log(productObj);

  const { productName, productImage, productDescription, productPrice, stock } =
    productObj;

  return (
    <>
      <div className="product">
        <img src={productImage} alt={productName} />
        <div className="product-about">
          <h4> {productName} </h4>
          <p className="price">$ {productPrice}</p>
        </div>

        <p className="product-details">{productDescription}</p>

        {stock ? (
          <button>Add to cart</button>
        ) : (
          <button className="outStock" disabled={true}>
            Out of stock
          </button>
        )}
      </div>
    </>
  );
}

export default ProductDetails;
