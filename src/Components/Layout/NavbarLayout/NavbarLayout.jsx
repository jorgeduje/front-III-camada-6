import React, { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./NavbarLayout.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
const NavbarLayout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>
      <div className="container-navbar">
        <h3>Logo</h3>
        <div className="container-items">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "navbar-items-active" : "navbar-items"
            }
          >
            login
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "navbar-items-active" : "navbar-items"
            }
          >
            Tienda
          </NavLink>

          {/* <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "navbar-items-active" : "navbar-items")}
          >
            Carrito
          </NavLink> */}
        </div>

        <Link to="/cart">
          <div className="container-cart">
            <ShoppingCartIcon sx={{ fontSize: "40px" }} />

            <div className="bubble-counter">
              <span>{cart.length}</span>
            </div>
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default NavbarLayout;
