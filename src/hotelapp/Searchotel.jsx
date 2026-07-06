
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addtowish ,Remove} from "../redux/wishlist";
import Cityhotel2 from "./Cityhotel2";



export default function Search(){
    let data = useSelector((state)=>(state.InputD.inputd))
    // console.log(data[0].location)
    // console.log("Noida")
    if(data.length!=0){
    return(
        <div>
                    <Cityhotel2 city={`${data[0].location}`}/>
     </div>
    )
}
else {return(
    <h2>loading</h2>

)}
}
