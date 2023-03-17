import React from "react";

const Products = ({
  updateProductById,
  deleteProductById,
  handleChange,
  handleSubmit,
  items,
}) => {
  return (
    <div>
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

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="nombre del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="precio del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="img"
          placeholder="url de la imagen"
          onChange={handleChange}
        />

        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default Products;
