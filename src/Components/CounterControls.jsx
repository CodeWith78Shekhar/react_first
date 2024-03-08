import React from 'react'
import { useCounter } from '../Context/CounterContext'

const CounterControls = () => {
    const {increment , decrement , reset} = useCounter()
    
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterControls
