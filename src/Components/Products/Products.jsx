import React from "react";
import { Link } from "react-router-dom";

const Products = ({
  updateProductById,
  deleteProductById,
  items,
}) => {
  return (
    <div>
      <Link to="/create-product">
        <button>Agregar nuevo producto</button>
      </Link>
      {items.map((elemento) => (
        <div key={elemento.id} style={{ border: "2px solid white" }}>
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
        </div>
      ))}

      
    </div>
  );
};

export default Products;
