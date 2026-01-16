import React from 'react'
import { products } from '../data/data'
import './Test.css'
const Test = () => {
    console.log(products)
    const productTitles=products.map(
        (product)=>(product.title)
    )
    console.log(productTitles)
  return (
   <>
   <h1>Products Page</h1>
   {
    productTitles.map(
        (product)=>(<p>{product}</p>)
    )
   }
   </>
  )
}

export default Test