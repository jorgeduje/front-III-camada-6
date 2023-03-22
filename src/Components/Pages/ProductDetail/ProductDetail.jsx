import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <h3>{product.price}</h3>
    </div>
  );
};

export default ProductDetail;
