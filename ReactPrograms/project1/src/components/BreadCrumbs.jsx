import React from 'react'
import './BreadCrumbs.css'
import {Link} from 'react-router-dom'
const BreadCrumbs = ({product}) => {
    const arrow = '/myimages/Arrow.png'
  return (
   <>
 <Link to="/"> HOME </Link>
 <img className="arrow-img" src={arrow}></img>
 <Link to="/shop"> SHOPPING </Link>
 <img className="arrow-img" src={arrow}></img>
 {product?.category}
 <img className="arrow-img" src={arrow}></img>
 {product?.title}
   </>
  )
}

export default BreadCrumbs