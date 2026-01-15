import React from 'react'
import './Navbar.css'
const Navbar1 = () => {
  const list=["File","Edit","Selection","View","Go","Run","Terminal"]
  return (
   <>
        <ul className="navbar">
           {list.map(
            (item,index)=>{
                return <li key={index}>{item}</li>
            }
           )}
        </ul>
   </>
  )
}

export default Navbar1