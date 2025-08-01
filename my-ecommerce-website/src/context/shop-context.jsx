import { createContext, useState } from "react";
import { PRODUCTS } from "../Products";

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {}
    for(let i = 1; i <PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart);

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
    };
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextvalue = {cartItems, addToCart, removeFromCart, updateCartItemCount};
    console.log(cartItems);
    return (
    <ShopContext.Provider value={contextvalue}>{props.children}</ShopContext.Provider>
    );
}