import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello World</h1>
     <Button />
    </>
  )
}

export default App
