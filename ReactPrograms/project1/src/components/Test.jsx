import React, { useState } from 'react'
import { products as prods } from '../data/data'
import './Test.css'
import CategoryBar from './CategoryBar'
const Test = () => {

    const [products, setProducts] = useState(prods)         //6
    const [buproducts, setBuproducts] = useState(prods)     //20

    const productCategories = buproducts.map(
        (product) => (product.category)
    )

    console.log(productCategories)

    const distinctCategories = new Set(productCategories)
    console.log(distinctCategories)

    const allCategories = [...distinctCategories, "All"]
    console.log(allCategories)

    function filterByCategory(selectedCategory) {
        // alert(selectedCategory)
        if (selectedCategory != 'All') {
            const filteredProductsByCategory = buproducts.filter(
                (product) => (product.category === selectedCategory)
            )

            setProducts(filteredProductsByCategory)
        }
        else {
            setProducts(buproducts)
        }
    }
    return (
        <>
            <CategoryBar list={allCategories} handleClick={filterByCategory} />
            <div className='parent-container'>
                {
                    products.map(
                        (product, index) => {
                            return <div key={index} className="card" style={{ 'width': '18rem' }}>
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