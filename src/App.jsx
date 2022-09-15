import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Alumnos from './components/alumnos.component'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Alumnos></Alumnos>
    </>
  )
}

export default App
