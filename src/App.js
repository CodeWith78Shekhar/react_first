import React from 'react'
import { CounterProvider } from './Context/CounterContext'
import CounterDisplay from './Components/CounterDisplay'
import CounterControls from './Components/CounterControls'
const App = () => {
  return (
   <>
   <CounterProvider>
   <h1>Counter Application</h1>
   <CounterDisplay/>
   <CounterControls/>
   </CounterProvider>
   
   </>
  )
}

export default App
