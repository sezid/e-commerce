import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    
    const currency="৳";
    const delievery_fee="50";

    
    
    
    const value={
        products, currency, delievery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;