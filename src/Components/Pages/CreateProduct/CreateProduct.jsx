import React from "react";

const CreateProduct = ( {handleSubmit, handleChange } ) => {
  return (
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
      <input
        type="text"
        name="category"
        placeholder="categoria"
        onChange={handleChange}
      />
      <input
        type="text"
        name="stock"
        placeholder="stock"
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="descripcion"
        onChange={handleChange}
      />

      <button type="submit">Crear</button>
    </form>
  );
};

export default CreateProduct;
