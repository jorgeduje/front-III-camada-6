import { useContext, useState } from "react";
import { Button } from "@mui/material";
import "./ItemCount.css"
import { CartContexReducer } from "../../../context/CartContextReducer";

export const ItemCount = ({ product }) => {
  const [counter, setCounter] = useState(1);
  const { dispatch } = useContext(CartContexReducer);

  const onAdd = () => {
    let obj = {
      ...product,
      quantity: counter,
    };

    dispatch({type: "ADD_TO_CART", payload: obj})
    // addToCart(obj);
  };

  return (
    // <div>
    //   <button onClick={() => setCounter(counter + 1)}>+</button>
    //   <h3>{counter}</h3>
    //   <button onClick={() => setCounter(counter - 1)}>-</button>

    //   <button onClick={onAdd}>Agregar al carrito</button>
    // </div>
    <div className="container-btn">
      <h2>Cantidad: {counter}</h2>
      <div className="btns">
        <Button variant="outlined" onClick={() => setCounter(counter + 1)}>
          +
        </Button>
        <Button variant="contained" onClick={onAdd}>
          agregar al carrito
        </Button>
        <Button variant="outlined" onClick={() => setCounter(counter - 1)}>
          -
        </Button>
      </div>
    </div>
  );
};
