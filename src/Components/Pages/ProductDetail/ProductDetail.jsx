import React, { useState } from "react";

const ProductDetail = ({ product, updateProductById }) => {
  
  const [productSelected, setProductSelected] = useState({
    name: product?.name,
    price: product?.price,
  });

  return (
    <div>
      <h1>{product.name}</h1>
      <h3>{product.price}</h3>
      <button onClick={updateProductById}>Editar</button>

      {/* <form action="">
        <input
          type="text"
          value={product.name}
          onChange={(e) => setProductSelected({ ...productSelected, name : e.target.value })}
        />
        <input type="text" value={product.price} />
      </form> */}
    </div>
  );
};

export default ProductDetail;
