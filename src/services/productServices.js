

import { db } from "../firebaseConfig";

import { productInstance } from "./productInstance"
import { addDoc, collection } from "firebase/firestore";

export const getProducts = ()=>{
    let productos = productInstance.get()
    return productos
}
export const getProductById = (id)=>{
    let producto = productInstance.get(`http://localhost:5000/products/${id}`)
    return producto
}

export const deleteProduct = (id)=>{
   return productInstance.delete(`/${id}`)
}

export const updateProduct = (id, data)=>{
    return productInstance.patch(`/${id}`, data);
}

export const createProduct = (data)=>{
    let refCollection = collection(db, "products");
    let res =  addDoc(refCollection, data)
      return res
}