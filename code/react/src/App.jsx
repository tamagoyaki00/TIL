import { useState, useEffect } from 'react'
import './App.css'
import Button from './components/Button'
import Display from './components/Display/Display';


function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    if (count > 5) {
      setCount(0)
    }
  } , [count])
  
  return (
    <>
     <h1 className="text-blue-400">Hello World</h1>
     <Button type="button" disabled={false} onClick={handleClick}>
      ボタン
     </Button>
     <Display count={count}></Display>
    </>
  )
}

export default App
