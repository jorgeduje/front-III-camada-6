import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateProduct from "./CreateProduct";

import { createProduct } from "../../../services/productServices";

const CreateProductContainer = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    img: "",
    category: "",
    description: "",
    stock: 0,
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let dataProduct = {
      name: newProduct.name,
      price: Number(newProduct.price),
      img: newProduct.img,
      category: newProduct.category,
      description: newProduct.description,
      stock: Number(newProduct.stock),

      // OTRA OPCION
      // ...newProduct,
      // price: Number(newProduct.price),
      // stock: Number(newProduct.stock)
    };

    // METODO CREAR EN FIREBASE

    createProduct(dataProduct)
      .then((res) => console.log(res.id))
      .catch((err) => setErrorMessage(err?.message));

    navigate("/shop");
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <CreateProduct handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
};

export default CreateProductContainer;
