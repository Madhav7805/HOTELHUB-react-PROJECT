// import ProductsListings from "../First";
import { useState } from "react"
import  "../App.css"

export default function Home(){
    let [showform,setshowform]=useState(false)
    let [guest , setguest]=useState(1)
    let [room , setroom]=useState(1)
    return(
        < div >
            <div className="homediv" style={{background:"linear-gradient(to right, #0c1254, #710e4d)",
                borderRadius:"135% 90% 90% 135%",height:"500px",width:"800px",margin:"70px",display:"flex"
                ,alignItems:"center",justifyContent:"center",opacity:".8",filter:"blur(5px)",position:"relative",left:"300px",zIndex:"0" }}>
            </div>

            <div style={{display:"flex",flexDirection:"column",position:"absolute", 
                bottom:"300px",left:"500px",top:"350px",gap:"30px",borderRadius:"30px 0px 30px 0px",height:"400px"}} >
                <input style={{width:"600px",height:"50px",borderRadius:"30px 0px 30px 0px",zIndex:"1"}}type="text" placeholder="SEARCH YOUR HOTEL" />
                <div style={{display:"flex",gap:"0px",flexDirection:"row",width:"100px" ,gap:"50px"}}>
                    <label htmlFor="">checkin</label>
                    <input style={{position:"relative"}}type="date" />
                    <label htmlFor="">checkout</label> 
                    <input style={{position:"relative"}} type="date" />
                </div> 
           <    div style={{display:"flex", gap:"50px",justifyContent:"space-evenly"}}>
                    <input style={{width:"100px",height:"20px"}}type="text"placeholder="location" />
                    <div style={{display:"flex", flexDirection:"column", position:"relative"}}>
                        <input onClick={()=>{setshowform(!showform)}} type="text" placeholder={(showform)?"guest and rooms":`${guest} guest ${room} room`}/>
                            {showform && 
                            <div style={{width:"100px",height:"100px", backgroundColor:"white",padding:"10px",position:"absolute",top:"20px"}}>
                                <div style={{display:"flex"}}>
                                    <label htmlFor="">guest</label>
                                    <button onClick={()=>{setguest(guest+1)}} style={{height:"20px"}}>+</button>
                                    <h3 style={{margin:"0px"}}>{guest}</h3>
                                    <button  onClick={()=>{setguest(Math.max(1,guest-1))}} style={{height:"20px"}}>-</button>
                                </div>
                                <div style={{display:"flex", marginTop:"20px"}}>
                                    <label htmlFor="">Room</label>
                                    <button  style={{height:"20px"}} onClick={()=>{setroom(room+1)}}>+</button>
                                    <h3 style={{margin:"0px"}}>{room}</h3>
                                    <button style={{height:"20px"}} onClick={()=>{setroom(Math.max(1,room-1))}}> -</button >
                                </div>
                            </div>
                            }
                    </div>
                </div>
                <button style={{height:"20px",width:"200px",position:"relative",left:"200px"}}>search</button>
            </div>

        </div>
    )
}