// HOOKS

import { useState } from "react";

export const Inmutable = () => {
  const [contador, setContador] = useState(0);

  // let contador = 0; // ESTO NO

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <>
      <h1>Este es el componente Inmutable</h1>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </>
  );
};
