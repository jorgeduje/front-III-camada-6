import { useContext, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { CartContexReducer } from "../../../context/CartContextReducer";

const CartContainer = () => {
  const { state, dispatch } = useContext(CartContexReducer);



  console.log(state.cart)

  useEffect(()=>{
    dispatch({type:"GET_TOTAL_PRICE"})
  },[])



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
      {/* <div
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
        {cart.map((producto) => (
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
            <Button variant="contained">Eliminar</Button>
          </div>
        ))}
      </div> */}

      <div
        style={{
          width: "40%",
          borderLeft: "2px solid black",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <Typography variant="h5">
          El total del carrito es: {state.totalPrice}
        </Typography>
       <div>
       <Button variant="contained">
          Finalizar compra
        </Button>
        <Button variant="contained" 
        onClick={()=>dispatch({type:"CLEAR_CART"})}
        >
          Limpiar carrito
        </Button>
       </div>
      </div>
    </div>
  );
};

export default CartContainer;
