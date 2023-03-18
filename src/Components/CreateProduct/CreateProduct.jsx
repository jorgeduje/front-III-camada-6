import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    img: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: newProduct.name,
      price: Number(newProduct.price),
      img: newProduct.img,
    };

    const create = axios.post("http://localhost:5000/products", data);
    create.then((res) => console.log(res)).catch((err) => console.log(err));
    navigate("/shop");
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  return (
    <div>
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

export default CreateProduct;
