import axios from "axios";

export const productInstance = axios.create({
    baseURL: 'http://localhost:5000/products',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });