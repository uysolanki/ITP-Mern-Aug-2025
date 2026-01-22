import React from 'react'
import './Menubar.css'
import {Link, useNavigate} from 'react-router-dom'
const Menubar1 = () => {
  const navigate=useNavigate()
  function handleClick(value)
  {
      switch(value)
      {
        case '/' : navigate('/') ; break;
        case '/login' : navigate('/login') ; break;
        case '/register' : navigate('/register') ; break;
        case '/shop' : navigate('/shop') ; break;
      }
  }
  return (
   <>
    <ul className="menu-bar">
        <li onClick={()=>handleClick('/')}>    Home</li>
        <li onClick={()=>handleClick('/login')}>Login</li>
        <li onClick={()=>handleClick('/register')}>Register</li>
        <li onClick={()=>handleClick('/shop')}>Shop</li>
        </ul>

   </>
  )
}

export default Menubar1