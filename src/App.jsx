import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductsContainer from "./Components/Products/ProductsContainer";
import Home from "./Components/Home/Home";
import CreateProduct from "./Components/CreateProduct/CreateProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<h1>Estoy en la vista Login</h1>} />
        <Route path="/cart" element={<h1>cart</h1>} />
        <Route path="/shop" element={<ProductsContainer />} />
        <Route path="/create-product" element={<CreateProduct />} />

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
