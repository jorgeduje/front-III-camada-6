import React, { useEffect, useState } from "react";
import {
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../services/productsServices";
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

  const updateProductById = (id) => {
    updateProduct(id);
    setIsChanged(true);
  };

  return (
    <div>
      <Products
        updateProductById={updateProductById}
        deleteProductById={deleteProductById}
        items={items}
      />
    </div>
  );
};

export default ProductsContainer;
