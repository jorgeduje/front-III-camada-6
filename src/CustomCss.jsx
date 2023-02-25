import React from 'react'

import "./CustomCss.css"

const CustomCss = () => {
  return (
    <div className='container'>
        <h2 className='title'>Este es el componente con css</h2>
        <h3 style={ {backgroundColor: "yellow"} } >Hola</h3>
    </div>
  )
}

export default CustomCss