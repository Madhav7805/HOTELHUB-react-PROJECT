import { configureStore } from "@reduxjs/toolkit";
import Hotels from "../hotelapp/hotels";
import wishlistReducer from "./wishlist"

export const Store = configureStore({
    reducer:{
        Hotels:wishlistReducer
    }
})