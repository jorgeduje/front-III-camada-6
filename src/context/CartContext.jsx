import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    let exist = cart.some((element) => element.id === id);
    return exist;
  };

  const addToCart = (item) => {
    if (isInCart(item.id)) {
      let newArr = cart.map((element) => {
        if (element.id === item.id) {
          return {
            ...element,
            quantity: element.quantity + item.quantity,
          };
        } else {
          return element;
        }
      });
      setCart(newArr);
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProductById = () => {
    console.log("se elimino");
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);

    return total;
  };

  return (
    <CartContext.Provider
      value={{ cart, clearCart, addToCart, deleteProductById, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
