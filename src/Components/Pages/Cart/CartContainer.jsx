import { width } from "@mui/system";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "50px",
    }} >
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
        }}
      >
        {cart.map((producto) => (
          <div
            key={producto.id}
            style={{
              width: "200px",
              height: "300px",
              border: "2px solid white",
            }}
          >
            <h3>{producto.name}</h3>
            <img src={producto.img} style={{ width: "100%" }} />
          </div>
        ))}
      </div>

      <div style={{width: "40%", borderLeft: "2px solid white",  height: "100vh",}}>
        <h3>El total del carrito es: {getTotalPrice()}</h3>
        <button onClick={clearCart}>Limpiar carrito</button>
      </div>
    </div>
  );
};

export default CartContainer;
