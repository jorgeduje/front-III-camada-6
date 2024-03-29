import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarLayout from "./Components/Layout/NavbarLayout/NavbarLayout";
import Home from "./Components/Pages/Home/Home";
import ProductsContainer from "./Components/Pages/Products/Products.container";
import CreateProductContainer from "./Components/Pages/CreateProduct/CreateProduct.container";
import ProductDetailContainer from "./Components/Pages/ProductDetail/ProductDetail.container";
import CartContainer from "./Components/Pages/Cart/CartContainer";
import CartContextReducerProvider from "./context/CartContextReducer";
import NavbarMaterial from "./Components/Layout/NavbarMaterial/NavbarMaterial";
import CheckOut from "./Components/Pages/CheckOut/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <CartContextReducerProvider>
        <Routes>
          <Route path="/login" element={<h1>Estoy en la vista Login</h1>} />

          <Route element={<NavbarMaterial />}>
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
            <Route path="/checkout" element={<CheckOut />} />
          </Route>

          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </CartContextReducerProvider>
    </BrowserRouter>
  );
}

export default App;
