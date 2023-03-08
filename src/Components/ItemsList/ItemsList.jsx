import { useState } from "react";

import { products } from "../../productsMock";

const ItemsList = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // cart.push(item) // ESTO NOO

    const existe = cart.some((elemento) => elemento.id === item.id); // 1

    if (!existe) {
      setCart([...cart, item]);
    } else {
      alert("ya existe en el carrito");
    }
  };

  return (
    <div>
      <h1>Productos</h1>

      {products.map((product) => {
        return (
          <div key={product.id} style={{ border: "2px solid white" }}>
            <h2>{product.name}</h2>
            <img src={product.img} alt="" />
            <h4>$ {product.price}.-</h4>
            <button onClick={() => addToCart(product)}>
              Agregar al carrito
            </button>
          </div>
        );
      })}

      <h1>Aca el carrito</h1>
      <h2>{cart.length}</h2>
      {cart.map((element) => {
        return (
          <div key={element.id} style={{ border: "2px solid red" }}>
            <h2>{element.name}</h2>
            <h3>{element.price}</h3>
          </div>
        );
      })}

      <button onClick={() => setCart([])}>Vaciar carrito</button>
    </div>
  );
};

export default ItemsList;
