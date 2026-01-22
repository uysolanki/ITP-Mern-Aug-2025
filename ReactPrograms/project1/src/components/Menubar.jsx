import React from 'react'
import './Menubar.css'
import {Link} from 'react-router-dom'
const Menubar = () => {
  return (
   <>
    <ol className='menu-bar'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/login"><li>Login</li></Link>
        <Link to="/register"><li>Register User</li></Link>
        <Link to="/shop"><li>Shopping</li></Link>
    </ol>
   </>
  )
}

export default Menubar