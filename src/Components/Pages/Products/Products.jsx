import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Common/ProductCard/ProductCard";

const Products = ({ updateProductById, deleteProductById, items }) => {
  return (
    <div>
      <Link to="/create-product">
        <button>Agregar nuevo producto</button>
      </Link>
      {items.map((elemento) => (
        <ProductCard
          key={elemento.id}
          elemento={elemento}
          updateProductById={updateProductById}
          deleteProductById={deleteProductById}
        />
      ))}
    </div>
  );
};

export default Products;
