import axios from "axios";
import { productInstance } from "./axiosInstance";

export const getProducts = () => {
  const productos = productInstance.get();
  return productos;
};

export const updateProduct = (id) => {
  return productInstance.patch(`/${id}`, {
    price: 5000,
    name: "zapas X",
  });
};

export const deleteProduct = (id) => {
  return productInstance.delete(`/${id}`);
};

export const createProduct = (data) => {
  return productInstance.post("/", data);
};
