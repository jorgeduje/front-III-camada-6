import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarLayout from "./Components/Layout/NavbarLayout/NavbarLayout";
import FooterLayout from "./Components/Layout/FooterLayout/FooterLayout";
import Home from "./Components/Pages/Home/Home";
import ProductsContainer from "./Components/Pages/Products/Products.container";
import CreateProductContainer from "./Components/Pages/CreateProduct/CreateProduct.container";
import ProductDetailContainer from "./Components/Pages/ProductDetail/ProductDetail.container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<h1>Estoy en la vista Login</h1>} />

        <Route element={<NavbarLayout />}>
          <Route path="/" element={<Home />} />

          <Route element={<FooterLayout />}>
            <Route path="/cart" element={<h1>cart</h1>} />
            <Route path="/shop" element={<ProductsContainer />} />
            <Route
              path="/create-product"
              element={<CreateProductContainer />}
            />
            <Route
              path="/productDetail/:id"
              element={<ProductDetailContainer />}
            />
          </Route>
        </Route>

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
