import React, { useContext, useState } from 'react'
import './Menubar.css'
import {Link, useNavigate} from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import ProductContext from '../contexts/ProductContext';
const Menubar1 = () => {
   const {totalCartItems}=useContext(ProductContext)
  
   const [total,setTotal]=useState(totalCartItems())
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
        <li class="parent-cart" onClick={()=>handleClick('/cart')}>Cart
         <FaCartPlus />
         <span>{total}</span>
        </li>
        </ul>

   </>
  )
}

export default Menubar1