import { useState } from "react";
import ProductContext from "./ProductContext";
import { useEffect } from "react";
import axios from 'axios'

function ProductContextProvider({children}) 
{
    const [products, setProducts] = useState([])         

    useEffect(
        () => {
            loadDataFromAPI()
        }, []        
    )

    async function loadDataFromAPI() {
        try {
            const apiproducts = await axios.get("https://fakestoreapi.com/products")
            setProducts(apiproducts.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    let sharedData = {products};          
  return (
   
   <ProductContext.Provider value={sharedData}>		
    {children}
   </ProductContext.Provider>
  )
}

export default ProductContextProvider
