import { useState } from "react";
import "./App.css";
import CustomCss from "./CustomCss";
import Home from "./Home";
import { Inmutable } from "./Inmutable";

const disciplinas = [
  "Banco de Dados",
  "Frontend",
  "Backend",
  "Metodologias Ágeis",
  "Infraestrutura",
];

function App() {
  const [tipoColor, setTipoColor] = useState("light");
  const [isDark, setIsDark] = useState(false); // FLAG O BANDERA

  const cambiarModoOscuro = ()=>{
    setTipoColor( "dark" )
  }
  const cambiarModoClaro = ()=>{
    setTipoColor( "light" )
  }

  const cambiarModo = ()=>{
    setIsDark( !isDark )
  }

  return (
    <div>
      <Home isDark={isDark} />
      <button onClick={cambiarModoOscuro}>Cambiar a modo oscuro</button>
      <button onClick={cambiarModoClaro}>Cambiar a modo Claro</button>
      <button onClick={cambiarModo}>CAMBIAR DESDE UN SOLO BOTON</button>
      <CustomCss />
      <ul>
        <li>{disciplinas[0]}</li>
        <li>{disciplinas[1]}</li>
        <li>{disciplinas[2]}</li>
        <li>{disciplinas[3]}</li>
        <li>{disciplinas[4]}</li>
      </ul>

      <ul>
        {disciplinas.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>

      <Inmutable />
    </div>
  );
}

export default App;
