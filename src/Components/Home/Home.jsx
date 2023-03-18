import React from "react";

import { useNavigate, NavLink } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const login = () => {
    // todo lo que tenga que hacer
    console.log("ya termine el proceso");
    navigate("/shop");
  };
  //   className={({ isActive, isPending }) =>
  //   isPending ? "pending" : isActive ? "active" : ""
  // }
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

      <h1>Bienvid@</h1>

      <button onClick={login}>Ingresar</button>
    </div>
  );
};

export default Home;
