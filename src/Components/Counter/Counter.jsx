import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  

  useEffect(() => {
    console.log("me ejecuto");
  }, []); // arreglo de dependencias

  console.log("estoy debajo del efecto")

  return (
    <div>
      <h1>Contador {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>sumar</button>
      <button onClick={() => setCounter(counter - 1)}>restar</button>
      <button onClick={() => setNombre("pepito")}>{nombre}</button>
      <button onClick={() => setApellido("perez")}>{apellido}</button>
    </div>
  );
};

export default Counter;
