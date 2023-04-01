import { useContext, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { CartContexReducer } from "../../../context/CartContextReducer";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { state, dispatch } = useContext(CartContexReducer);

  console.log(state.cart);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL_PRICE" });
  }, []);

  const limpiarCarrito = ()=>{
    Swal.fire({
      title: 'Seguro quieres limpiar el carrito?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si, seguro',
      denyButtonText: `No, me arrepiento`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Carrito limpiado con exito', '', 'success')
        dispatch({ type: "CLEAR_CART" })
      } else if (result.isDenied) {
        Swal.fire('El carrito queda como esta', '', 'info')
      }
    })
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <div
        style={{
          width: "60%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
        }}
      >
        {state.cart.map((producto) => (
          <div
            key={producto.id}
            style={{
              width: "100%",
              height: "100px",
              border: "2px solid white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "2px solid black",
              padding: "10px",
            }}
          >
            <img src={producto.img} style={{ width: "10%", height: "80px" }} />
            <h3>{producto.name}</h3>
            <h3>Cantidad: {producto.quantity}</h3>
            <h4>{producto.price}</h4>
            <Button
              onClick={() =>
                dispatch({ type: "DELETE_BY_ID", payload: producto.id })
              }
              variant="contained"
            >
              Eliminar
            </Button>
          </div>
        ))}
      </div>

      <div
        style={{
          width: "40%",
          borderLeft: "2px solid black",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5">
          El total del carrito es: {state.totalPrice}
        </Typography>
        <div>
          <Button variant="contained">Finalizar compra</Button>
          <Button
            variant="contained"
            onClick={limpiarCarrito}
          >
            Limpiar carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
