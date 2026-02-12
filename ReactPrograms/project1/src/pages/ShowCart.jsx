import React, { useContext, useState } from 'react'
import ProductContext from '../contexts/ProductContext'

const ShowCart = () => {
    const {totalCartItems}=useContext(ProductContext)

    const [total,setTotal]=useState(totalCartItems())
  return (
    <>
    <h1>Total Cart Items : {total}</h1>
    </>
  )
}

export default ShowCart