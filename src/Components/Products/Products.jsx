import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productos = axios.get("http://localhost:5000/products");
    setTimeout(() => {
      productos
        .then((res) => setItems(res.data))
        .catch((err) => console.log(err));
    }, 2000);
  }, []);

  console.log(items);

  return (
    <div>
      {items.map((elemento) => (
        <h1 key={elemento.id}>{elemento.name}</h1>
      ))}
    </div>
  );
};

export default Products;
