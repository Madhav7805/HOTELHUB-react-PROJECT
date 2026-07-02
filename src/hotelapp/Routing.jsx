import { BrowserRouter , Route , Routes } from "react-router-dom"

import Navbar from "./Navbar"
// import Hotellist from "./hotels"
import Home from "./Home"
// import ProductsListings from "../First"
import Hotels from "./hotels"
import  Products from "./Products"
import Wishlist from "./Wishlist"
export default function Routing(){

    return (
        <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path="/Hotels" element={<Hotels/>}></Route>
        <Route path="/Wishlist" element={<Wishlist/>}></Route>
        <Route path="/contact" element={<Hotels/>}></Route>
        <Route path="/products/:id" element={<Products/>}> </Route>
    </Routes>
    </BrowserRouter>
        </>
    )
}