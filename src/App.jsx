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
       </BrowserRouter>
      
  );
}

export default App;
