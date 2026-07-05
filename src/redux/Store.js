import { configureStore } from "@reduxjs/toolkit";
import Hotels from "../hotelapp/hotels";
import wishlistReducer from "./wishlist"
import {inputreducer} from "./inputdata"

export const Store = configureStore({
    reducer:{
        Hotels:wishlistReducer,
         InputD:inputreducer
    },
    
       
    
})