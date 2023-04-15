import React, { useEffect, useState } from "react";
import {
  getProducts,
  deleteProduct,
  updateProduct,
} from "../../../services/productServices";

import Products from "./Products";

import { db } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const ProductsContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let refCollection = collection(db, "products");
    getDocs(refCollection).then((res) => {
      const products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setItems(products);
    });
  }, []);

  const deleteProductById = (id) => {
    deleteProduct(id);
    setIsChanged(true);
  };

  return (
    <div style={{ backgroundColor: "black", minHeight: "90vh" }}>
      <Products deleteProductById={deleteProductById} items={items} />
    </div>
  );
};

export default ProductsContainer;
