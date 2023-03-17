import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "./Products";

const ProductsContainer = () => {
  const [items, setItems] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    img: "",
  });
  // const [isCreated, setIsCreated] = useState(false);
  // const [isDelete, setIsDelete] = useState(false);
  // const [isUpdated, setIsUpdated] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    // setIsCreated(false);
    // setIsDelete(false);
    // setIsUpdated(false)
    setIsChanged(false);
    const productos = axios.get("http://localhost:5000/products");
    productos
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [isChanged]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: newProduct.name,
      price: Number(newProduct.price),
      img: newProduct.img,
    };
    // fetch("http://localhost:5000/products", {
    //   method: "POST",
    //   headers:{
    //     "content-type": "aplication.json"
    //   },
    //   body: JSON.stringify(data)
    // })

    const create = axios.post("http://localhost:5000/products", data);
    create.then((res) => console.log(res)).catch((err) => console.log(err));

    setIsChanged(true);
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const deleteProductById = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`);
    setIsChanged(true);
  };

  const updateProductById = (id) => {
    axios.patch(`http://localhost:5000/products/${id}`, {
      price: 6000,
      name: "zapas X",
    });

    setIsChanged(true);
  };

  return (
    <Products
      updateProductById={updateProductById}
      deleteProductById={deleteProductById}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      items={items}
    />
  );
};

export default ProductsContainer;
