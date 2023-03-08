import React from "react";

const Card = ({ rol, password, email }) => {
  return (
    <div>
      <h2>Hola al email: {email} </h2>
      <h2>tu contraseña es: {password} </h2>
      <h2>y tu rol es : {rol} </h2>
    </div>
  );
};

export default Card;
