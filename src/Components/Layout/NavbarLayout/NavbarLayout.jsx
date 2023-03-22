import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";


const NavbarLayout = () => {
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
      <Outlet />
    </div>
  );
};

export default NavbarLayout;
