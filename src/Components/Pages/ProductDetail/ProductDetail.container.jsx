import React, { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getProductById, updateProduct } from "../../../services/productServices";

const ProductDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [showForm, setShowForm] = useState(false);

  const [productSelected, setProductSelected] = useState({
    name: product.name,
  });

  const [isUpdated, setIsUpdated] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsUpdated(false);
    let producto = getProductById(id);
    producto.then((res) => setProduct(res.data));
  }, [isUpdated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, productSelected);
    setIsUpdated(true);
  };

  return (
    <div>
      <ProductDetail
        product={product}
        showForm={showForm}
        setShowForm={setShowForm}
        handleSubmit={handleSubmit}
        productSelected={productSelected}
        setProductSelected={setProductSelected}
      />
    </div>
  );
};

export default ProductDetailContainer;
