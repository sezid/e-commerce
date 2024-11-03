import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    
    const currency="৳";
    const delievery_fee="50";
    const exchangeRate=3.5;

    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(false); //shows when to show and no show search bar

    
    
    
    const value={
        products, currency, delievery_fee, exchangeRate, search, setSearch, showSearch, setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;