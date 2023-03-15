
import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter/Counter'
import Products from './Components/Products/Products'

function App() {

  const [show, setShow] = useState(false)

  return (
    <div className="App">
      {/* <button onClick={()=>setShow(!show)}>Montar y desmontar componente</button>
      {
        show ? <Counter /> : <h1>No esta</h1>
      } */}

      <Products />
    </div>
  )
}

export default App
