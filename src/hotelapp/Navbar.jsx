import {Link} from "react-router-dom"
import vite from "../assets/vite.svg"
export default function Navbar(){

    return(
        <div style={{color:"white",display:"flex", height:"150px",backgroundColor:"#0A2947" ,margin:"0px",justifyContent:"space-evenly", alignItems:"center"}}>
        <img src={vite} alt="logo" />
        {/* <input style={{height:"50px", width:"600px",borderRadius:"20px 0px 20px 0px",border:"2px solid black"}}type="text" placeholder="search your hotel" />
         */}
         <h1 style={{fontSize:"4rem"}}>HOTELHUB</h1>
        <Link style={{color:"white"}} to="/Hotels"><div style={{borderRadius:"10px 0px 10px 0px",backgroundColor:"beige",color:"black",padding:"15px"}}>hotels</div></Link>
        <Link style={{color:"white"}}to="/Wishlist"><div style={{borderRadius:"10px 0px 10px 0px",backgroundColor:"beige",color:"black",padding:"15px"}}>wishlist</div></Link>
        <Link style={{color:"white"}}to="/contact"><div style={{borderRadius:"10px 0px 10px 0px",backgroundColor:"beige",color:"black",padding:"15px"}}>contact</div></Link>

        </div>
    )
}