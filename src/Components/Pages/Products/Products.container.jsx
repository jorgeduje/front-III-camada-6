
import React, { useEffect, useState } from "react";
import {
  getProducts,
  deleteProduct,
  updateProduct,
} from "../../../services/productServices";

import Products from "./Products";

const ProductsContainer = () => {
  const [items, setItems] = useState([]);

  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setIsChanged(false);
    const productos = getProducts();
    productos
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [isChanged]);

  const deleteProductById = (id) => {
    deleteProduct(id);
    setIsChanged(true);
  };

  return (
    <div style={{backgroundColor: "black", minHeight: "90vh"}}>
      <Products
       
        deleteProductById={deleteProductById}
        items={items}
      />
    </div>
  );
};

export default ProductsContainer;
