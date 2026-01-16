import { useState } from 'react'
import './Counter.css'
import MyButton from './MyButton'
import { MdOutlineMarkEmailRead } from "react-icons/md";

const Counter = () => {
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
     
      <MyButton text="Increment" handleClick={increment}>
        <div>
        <h1>This is children prop</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, maiores!</p>
        </div>
      </MyButton>
      <MyButton text="Increment By 2" handleClick={incrementBy2}/>
      <MyButton text="Decrement" handleClick={decrement}/>
      <MyButton text="Decrement By 2" handleClick={decrementBy2}/>
      <MyButton icon={<MdOutlineMarkEmailRead />}/>

      {/* <button onClick={increment}>Increment</button>
      <button onClick={incrementBy2}>Increment By 2</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={decrementBy2}>Decrement By 2</button> */}
      <span>{count}</span>
    </div>
  )
}

export default Counter