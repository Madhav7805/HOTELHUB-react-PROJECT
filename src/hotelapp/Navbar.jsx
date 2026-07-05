import {Link, Navigate, useNavigate} from "react-router-dom"
import vite from "../assets/vite.svg"
import { useReducer } from "react"
import { useSelector } from "react-redux"

export default function Navbar(){
    const navigate = useNavigate()
    function navigates(){navigate("/")}
    const count = useSelector((state)=>state.Hotels.hotels.length)


    

    return(
        <div className="font-black bg-black  m-0 shadow-2xl shadow-amber-800 fixed w-400 z-1" style={{color:"white",display:"flex", height:"100px",opacity:"0.3" ,justifyContent:"space-evenly", alignItems:"center"}}>
        {/* <img src={vite} alt="logo" /> */}
        {/* <input style={{height:"50px", width:"600px",borderRadius:"20px 0px 20px 0px",border:"2px solid black"}}type="text" placeholder="search your hotel" />
         */}
        <div><h1 onClick={()=>{navigates()}}  className="shadow-amber-600 shadow-2xs text-6xl">HOTELHUB</h1></div> 
       <div className="flex gap-20"> <Link className="flex gap-1 "style={{color:"white"}}to="/Wishlist"><div style={{borderRadius:"10px 0px 10px 0px",color:"white", fontSize:"xx-large"}}>wishlist
            <button className=" w-max m-1 ">({count})</button></div></Link>
        <Link style={{color:"white"}} to="/Hotels"><div className="font-extrabold" style={{borderRadius:"10px 0px 10px 0px",color:"white", fontSize:"xx-large"}}>hotels
            
        </div></Link>
        <Link style={{color:"white"}}to="/Contact"><div style={{borderRadius:"10px 0px 10px 0px",color:"white", fontSize:"xx-large"}}>contact</div></Link></div>

        </div>
    )
}