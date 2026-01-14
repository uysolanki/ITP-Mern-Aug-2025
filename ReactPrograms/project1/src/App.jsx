import React, { useState } from 'react'
import './App.css'
const App = () => {
  let a=10
  let b=20
  let c=a+b;
  console.log(c)

  function increment()
  {
  setCount(count+1)
  }

  function decrement()
  {
  setCount(count-1)
  }

  function incrementBy2()
  {
  setCount(count+2)
  }

  function decrementBy2()
  {
  setCount(count-2)
  }

  const [count,setCount]=useState(0)

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementBy2}>Increment By 2</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={decrementBy2}>Decrement By 2</button>
      <span>{count}</span>
    </div>
  )
}

export default App