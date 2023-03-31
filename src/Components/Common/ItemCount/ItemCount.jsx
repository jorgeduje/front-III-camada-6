import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

export const ItemCount = ({ product }) => {
  const [counter, setCounter] = useState(1);
  const { addToCart } = useContext(CartContext);

  const onAdd = () => {
    let obj = {
      ...product,
      quantity: counter,
    };

    addToCart(obj);
  };

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter - 1)}>-</button>

      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};
