import React from 'react'

import estilos from "./Home.module.css"

const Home = ( { isDark, type } ) => {

  // const [color, setColor] = useState("")

  // switch ( type ) {
  //   case type === "fire":
  //     setColor("red")
  //     break;
  //   case type === "water":
  //     setColor("blue")
  //     break
  //   default:
  //     break;
  // }

  let obj = {
    fire: [{},{}],
    water: [{}],
    air: [{},]
  }

  
  let x = Object.keys(obj)
  console.log(x)

  return (
    <div className={ isDark ? estilos.dark : estilos.light }>
        <h1 className={estilos.titleHome} >Este es el Homeeee</h1>
        <h2 className={estilos.description} >Descripccion</h2>
    </div>
  )
}

export default Home