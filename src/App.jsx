import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarLayout from "./Components/Layout/NavbarLayout/NavbarLayout";
import FooterLayout from "./Components/Layout/FooterLayout/FooterLayout";
import Home from "./Components/Pages/Home/Home";
import ProductsContainer from "./Components/Pages/Products/Products.container";
import CreateProductContainer from "./Components/Pages/CreateProduct/CreateProduct.container";
import ProductDetailContainer from "./Components/Pages/ProductDetail/ProductDetail.container";
import CartContextProvider from "./context/CartContext";
import CartContainer from "./Components/Pages/Cart/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route path="/login" element={<h1>Estoy en la vista Login</h1>} />

          <Route element={<NavbarLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="/cart" element={<CartContainer />} />
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

          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
