import React, { useCallback, useEffect, useMemo, useState } from 'react'
import CategoryBar from '../components/CategoryBar'
import SearchBar from '../components/SearchBar'
import './ShowProducts.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import ProductContext from '../contexts/ProductContext'

const ShowProducts2 = () => {

    const data=useContext(ProductContext)

    const [products, setProducts] = useState(data.products)         //20
    const [buproducts, setBuproducts] = useState(data.products)     //20

    const allCategories = useMemo(() => {
        const categories = buproducts.map(p => p.category)
        const uniqueCategories = new Set(categories)
        return [...uniqueCategories, "All"]
    }, [buproducts])


    
    const filterByCategory = useCallback(
        (selectedCategory) => {
            if (selectedCategory === "All") {
                setProducts(buproducts)
            }
            else {
                setProducts(buproducts.filter(p => p.category === selectedCategory))
            }
        }, [buproducts])

    function searchByTitle(event) {
        let searchText = event.target.value.toLowerCase()
        //console.log(searchText)
        const searchedProducts = buproducts.filter(
            (product) => product.title.toLowerCase().includes(searchText)
        )
        setProducts(searchedProducts)
    }
    return (
        <>
            <CategoryBar list={allCategories} handleClick={filterByCategory} />
            <SearchBar handleChange={searchByTitle} />

            <div className='parent-container'>
                {
                    products.map(
                        (product, index) => {
                            return <div key={index} className="card" style={{ 'width': '18rem' }}>
                                <Link to={`/single/${product.id}`}> <img className="card-img-top" src={product.image} alt="Card image cap" /></Link>
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

export default ShowProducts2


