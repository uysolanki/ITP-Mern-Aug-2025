import React from 'react'
import './Menubar.css'
import {Link, useNavigate} from 'react-router-dom'
import paths from '../config/RouteConfig'

const Menubar2 = () => {
  const navigate=useNavigate()
  function handleClick(value)
  {
    navigate(value);   
  }
  
  return (
   <>
    <ul className="menu-bar">
      {paths.map(
        (item,index)=>(<li key={index} onClick={()=>handleClick(item.path)}>    {item.caption}</li>)
      )}   
    </ul>

   </>
  )
}

export default Menubar2