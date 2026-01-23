import React, { useEffect, useState } from 'react'
import CategoryBar from '../components/CategoryBar'
import SearchBar from '../components/SearchBar'
import './ShowProducts.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ShowProducts1 = () => {

    const [products, setProducts] = useState([])         //20
    const [buproducts, setBuproducts] = useState([])     //20

    useEffect(
        () => {
            loadDataFromAPI()
        }, []        //only once at the time of component loading
    )

    async function loadDataFromAPI() {
        try {
            const apiproducts = await axios.get("https://fakestoreapi.com/products")
            setProducts(apiproducts.data)
            setBuproducts(apiproducts.data)
        }
        catch (error) {
            console.log(error)
        }
    }
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

export default ShowProducts1