import { useState } from "react"
import '../styles/Counter.css'

const Counter = () => {

  const [num, setNum] = useState<number>(0)

  const increment = () => {
    setNum(num + 1)
  }

  const decrement = () => {
    setNum(num - 1)
  }

  return (
    <div className="container-counter">
      <button onClick={increment}>+</button>
      <span>{num}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter