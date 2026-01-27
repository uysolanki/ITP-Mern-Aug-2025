import React, { useEffect, useState } from 'react'
import './SinglePage.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BreadCrumbs from '../components/BreadCrumbs'

const SinglePage1 = () => {
    const star = '/myimages/star.png'
    const star_dull = '/myimages/star_dull.png'

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

    const totalStars = 5;
    const rating = product?.rating?.rate || 0;
    const filledStars = Math.round(rating);
    const dullStars = totalStars - filledStars;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
        stars.push(<img key={`f-${i}`} src={star} alt="star" />);
    }

    for (let i = 0; i < dullStars; i++) {
        stars.push(<img key={`d-${i}`} src={star_dull} alt="star dull" />);
    }



    return (
        <>
            <BreadCrumbs product={product} />
            <div className='productdisplay'>
                <div className="product-display-left">

                    <div className="product-display-img-list">
                        <img src={product.image} alt={product.title} />
                    </div>


                </div>

                <div className="product-display-right">

                    <h1>{product.title}</h1>

                    <div className="productdisplay-right-star">
                        {stars}
                        <p>({product?.rating?.count})</p>
                    </div>

                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">
                            ₹{product.price}
                        </div>
                        <div className="productdisplay-right-price-new">
                            ₹{product.price}
                        </div>
                    </div>

                    <div className="productdisplay-right-description">
                        {product.description}
                    </div>


                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-size-options">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>


                    <button>
                        ADD TO CART
                    </button>


                </div>

            </div>
            <Link className="btn btn-secondary" to="/shop"> Back To Shopping</Link>
        </>

    )
}

export default SinglePage1