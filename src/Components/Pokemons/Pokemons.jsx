import React from "react";

import pokemonsJson from "../../../pokemons.json";
import PokemonCard from "../PokemonCard/PokemonCard";

const Pokemons = ({ type }) => {
  let pokemonsByType = pokemonsJson[type];

  let arr = [ "pepito", "fulanito", "carmen" ]

  return (
    <div>
      {
        pokemonsByType.map((element) => {
            return (
              <PokemonCard element={element} key={element.id} />
            );
        })
      }

      {
        arr.map( (element)=>{
          return <h1 key={element}>{element}</h1>
        })
      }
    </div>
  );
};

export default Pokemons;

