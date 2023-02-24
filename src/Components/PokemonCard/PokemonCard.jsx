import React from "react";

const PokemonCard = ({ element }) => {
  return (
    <>
      <div>
        <h1> {element.name} </h1>
        <h2>{element.powerLevel}</h2>
        <h2>{element.agressive ? "es agresivo" : "no es agresivo"}</h2>
        <img src={element.avatar} alt="" />
      </div>

      <div>
        <h2>Hola</h2>
        <h3>chaui</h3>
      </div>
    </>
  );
};

export default PokemonCard;
