import {Link, Navigate, useNavigate} from "react-router-dom"
import vite from "../assets/vite.svg"
import { useReducer } from "react"
import { useSelector } from "react-redux"

export default function Navbar(){
    const navigate = useNavigate()
    function navigates(){navigate("/")}
    const count = useSelector((state)=>state.Hotels.hotels.length)


    

    return(
        <div className="font-extrabold" style={{color:"white",display:"flex", height:"150px",backgroundColor:"#0A2947" ,margin:"0px",justifyContent:"space-evenly", alignItems:"center"}}>
        <img src={vite} alt="logo" />
        {/* <input style={{height:"50px", width:"600px",borderRadius:"20px 0px 20px 0px",border:"2px solid black"}}type="text" placeholder="search your hotel" />
         */}
         <h1 onClick={()=>{navigates()}} style={{fontSize:"4rem"}}>HOTELHUB</h1>
        <Link style={{color:"white"}} to="/Hotels"><div className="font-extrabold" style={{borderRadius:"10px 0px 10px 0px",backgroundColor:"beige",color:"black",padding:"15px"}}>hotels</div></Link>
        <Link className="flex gap-1"style={{color:"white"}}to="/Wishlist"><div style={{borderRadius:"10px 0px 10px 0px",backgroundColor:"beige",color:"black",padding:"15px"}}>wishlist
            <button className="bg-amber-100 w-max m-1 rounded-2xl text-black">({count})</button>
        </div></Link>
        <Link style={{color:"white"}}to="/Contact"><div style={{borderRadius:"10px 0px 10px 0px",backgroundColor:"beige",color:"black",padding:"15px"}}>contact</div></Link>

        </div>
    )
}