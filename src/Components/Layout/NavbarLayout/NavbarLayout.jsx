import React, { useContext, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "./NavbarLayout.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContexReducer } from "../../../context/CartContextReducer";
const NavbarLayout = () => {
  const { state, dispatch } = useContext(CartContexReducer);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL_QUANTITY" });
  }, [state.cart]);

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
        </div>

        <Link to="/cart">
          <div className="container-cart">
            <ShoppingCartIcon sx={{ fontSize: "40px" }} />

            <div className="bubble-counter">
              <span>{state.totalQuantity}</span>
            </div>
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default NavbarLayout;
