import { useState } from "react";
import ProductContext from "./ProductContext";
import { useEffect } from "react";
import axios from 'axios'

function ProductContextProvider({children}) 
{
    function getDefaultCart()
    {
        return JSON.parse(localStorage.getItem("mycart")) || {}
    }
    const [products, setProducts] = useState([])  
    const [cartItems,setCartItems] = useState(getDefaultCart())  

    console.log(cartItems)
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

    function addToCart(prodId)
    {
       setCartItems(prev => ({
            ...prev,
            [prodId]: (prev[prodId] || 0) + 1
        }));
    }

    function removeFromCart(prodId)
    {
        setCartItems(prev => {
            const newCart = { ...prev };
            if (newCart[prodId] > 0) {
                newCart[prodId] -= 1;
            }
            return newCart;
        });
    }

    function totalCartItems()
    {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    useEffect(() => {
        if (Object.keys(cartItems).length > 0) {
            localStorage.setItem("mycart", JSON.stringify(cartItems));
        }
    }, [cartItems]);
    
    let sharedData = {products,addToCart,removeFromCart,totalCartItems};          
  return (
   
   <ProductContext.Provider value={sharedData}>		
    {children}
   </ProductContext.Provider>
  )
}

export default ProductContextProvider
