import { BrowserRouter , Route , Routes } from 'react-router-dom'

import Navbar from "./Navbar"
// import Hotellist from "./hotels"
import Home from "./Home"
// import ProductsListings from "../First"
import Hotels from "./hotels"
import  Products from "./Products"
import Wishlist from "./Wishlist"
import Contact from "./Contact"
import Search from './Searchotel'
export default function Routing(){

    return (
        <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path="/Hotels" element={<Hotels/>}></Route>
        <Route path="/Wishlist" element={<Wishlist/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/products/:id" element={<Products/>}> </Route>
        <Route path="/search" element={<Search/>}> </Route>
    </Routes>
    </BrowserRouter>
        </>
    )
}