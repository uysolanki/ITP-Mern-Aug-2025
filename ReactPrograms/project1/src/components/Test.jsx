import React from 'react'
import { products } from '../data/data'
import './Test.css'
const Test = () => {
    console.log(products)
    const productTitles = products.map(
        (product) => (product.title)
    )
    console.log(productTitles)
    return (
        <>
        <div className='parent-container'>
        {
         products.map(
            (product)=>{
                return <div className="card" style={{'width':'18rem'}}>
                <img className="card-img-top" src={product.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href="#" className="btn btn-primary">ADD TO CART</a>
                </div>
            </div>
            }
         )   
        }
        </div>
        </>
    )
}

export default Test