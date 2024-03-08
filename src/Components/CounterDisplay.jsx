import React from 'react'
import { useCounter } from '../Context/CounterContext'

const CounterDisplay = () => {
    const {count} = useCounter()
  return (
    <div>
      counter display : {count}
    </div>
  )
}

export default CounterDisplay
