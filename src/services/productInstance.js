import axios from "axios";

export const productInstance = axios.create({
  baseURL: "http://localhost:5000/products",
//   headers: {
//     "Authorization barer": "ASDsadasd122312DXASDasd",
//     "Content-Type": "aplication json",
//   },
});
