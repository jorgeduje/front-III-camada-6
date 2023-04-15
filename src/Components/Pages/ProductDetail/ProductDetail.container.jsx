import React, { useEffect, useState, useContext } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";



// FIREBASE

import { getDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ProductDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [showForm, setShowForm] = useState(false);

  console.log(product)

  const { id } = useParams();

  let refColecction = collection(db, "products");

  let refDoc = doc(refColecction, id);
  useEffect(() => {

    getDoc(refDoc).then((res) => {
      setProduct({
        ...res.data(),
        id: res.id,
      });
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let dataUpdate = {
      ...product,
      price: Number(product.price),
      stock: Number(product.stock)
    }
    
    updateDoc( refDoc, dataUpdate )

  };

  return (
    <div>
      <ProductDetail
        product={product}
        showForm={showForm}
        setShowForm={setShowForm}
        handleSubmit={handleSubmit}
        setProduct={setProduct}
      />
    </div>
  );
};

export default ProductDetailContainer;
