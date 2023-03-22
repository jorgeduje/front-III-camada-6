import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento, deleteProductById, updateProductById }) => {
  return (
    <div style={{ border: "2px solid white" }}>
      <h2>{elemento.name}</h2>
      <h3>{elemento.price}</h3>
      <img
        src={elemento.img}
        alt=""
        style={{ width: "200px", height: "200px" }}
      />
      <button onClick={() => deleteProductById(elemento.id)}>
        Eliminar producto
      </button>
      <button onClick={() => updateProductById(elemento.id)}>Editar</button>
      <Link to={`/productDetail/${elemento.id}`}>
        <button>Ver Detalle</button>
      </Link>
    </div>
  );
};

export default ProductCard;
