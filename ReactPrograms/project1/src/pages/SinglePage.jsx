import React, { useEffect, useState } from 'react'
import './SinglePage.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BreadCrumbs from '../components/BreadCrumbs'

const SinglePage = () => {
    const { prodid } = useParams()
    console.log(prodid)

    const [product, setProduct] = useState({})
    useEffect(
        () => {
            loadSingleData()
        }, [prodid]          //everytime the data changes of the variable
    )

    async function loadSingleData() {
        try {
            const apiproducts = await axios.get(`https://fakestoreapi.com/products/${prodid}`)
            setProduct(apiproducts.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <BreadCrumbs product={product}/>
            <div className="card" style={{ 'width': '18rem' }}>
               <img className="card-img-top" src={product.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href="#" className="btn btn-primary">ADD TO CART</a>
                </div>
                <Link className="btn btn-primary" to='/shop'>Go Back To Shopping</Link>
            </div>
            
        </>
    )
}

export default SinglePage