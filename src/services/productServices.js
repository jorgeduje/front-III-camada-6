

import { productInstance } from "./productInstance"

export const getProducts = ()=>{
    let productos = productInstance.get()
    return productos
}

export const deleteProduct = (id)=>{
   return productInstance.delete(`/${id}`)
}

export const updateProduct = (id, data)=>{
    return productInstance.patch(`/${id}`, data);
}

export const createProduct = (data)=>{
    return productInstance.post( "/", data);
}