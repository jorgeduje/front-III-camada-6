import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../services/productServices";
import CreateProduct from "./CreateProduct";

const CreateProductContainer = () => {
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

    const create = createProduct(data)
    create.then((res) => console.log(res)).catch((err) => console.log(err));
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
