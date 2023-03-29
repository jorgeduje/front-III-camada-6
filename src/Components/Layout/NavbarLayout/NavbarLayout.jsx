import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const NavbarLayout = (  ) => {

  const {cart} = useContext(CartContext)
  
  return (
    <div>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "acitveNavbar" : "navbar")}
      >
        login
      </NavLink>

      <NavLink
        to="/shop"
        className={({ isActive }) => (isActive ? "acitveNavbar" : "navbar")}
      >
        Tienda
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? "acitveNavbar" : "navbar")}
      >
        Carrito
      </NavLink>
      <h3>Carrito: {cart.length}</h3>
      <Outlet />
    </div>
  );
};

export default NavbarLayout;
