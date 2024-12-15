import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';
import CartItems from "../Components/CartItems/CartItems";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length+1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItem);
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
    const getTotalCartAmmout=()=>{
        let totalAmout=0;
        for (let item in CartItems) {
          for(const item of CartItems){
            if(CartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmout+=itemInfo.new_price*CartItems[item];
            }
            return totalAmout;
          } 
        }
    }
    const getTotalCartItems = () => {
       let totalItem=0;
     for (const item in CartItems){
        if (CartItems[item]>0){
            totalItem+=CartItems[item];
     }
    }
     return totalItem ;
    }


    const contextValue = {getTotalCartItems ,getTotalCartAmmout, all_product, cartItem, addToCart, removeFromCart };
    
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
