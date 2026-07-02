import { useEffect, useReducer, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// import { IoStarSharp } from "react-icons/io5";

export default function ProductsListings(){
    let [current,setCurrent]=useState(0);
    let [totalCount,setTotalCount]=useState(0)
    let PAGE_SIZE=32;
    let url=`https://demohotelsapi.pythonanywhere.com/hotels?limit=${PAGE_SIZE}&skip=${PAGE_SIZE*current}`
    let [data,setData]=useState([]);
    async function dataFetch(){
        let res=await fetch(url)
        let hotelsData=await res.json()
        // console.log(hotelsData.count)
        setTotalCount(hotelsData.count)
        setData(hotelsData.data);
    }
    useEffect(()=>{
        dataFetch()
    },[current])
    // console.log(data);
    // console.log(totalCount)

    let no_of_pages=Math.ceil(totalCount/PAGE_SIZE)
    console.log(no_of_pages)

    let start=current*PAGE_SIZE;
    let end=start+PAGE_SIZE
    return(
        <>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",flexDirection:"column",gap:"30px"}}>
                {
                    data.map((el)=>(
                        <Product id={el.id} name={el.name} thumbnail={el.thumbnail} des={el.description} location={el.location} rating={el.rating} price={el.price}/>
                    ))
                }
            </div>
            <div style={{display:"flex", gap:"10px",justifyContent:"center", margin:"10px"}}>
            <button  onClick={()=>{setCurrent(current-1)}}>{"<<<"}</button>

            {
                [...Array(no_of_pages)].keys().map((el)=>{
                   if(el ==0 || el ==no_of_pages-1 || (el>=current-2&&el<=current+2)){
                    return <button onClick={()=>{setCurrent(el) }} style={{backgroundColor:(current==el)?"#0A2947":"beige",color:(current==el)?"white":"black"}}>{el+1}</button>}
                    else  { return <span>.</span>}
                })
            }
            <button onClick={()=>{setCurrent(current+1)}}>{">>>"}</button>

            </div>
            
        </>
    )
}

export function Product({id ,name,thumbnail,des,location,rating,price}){
    const navigate= useNavigate()
    // const id = useRef(0)
    function navigates() {navigate(`/products/${id}`)}
    return(
        <div style={{display:"flex",gap:"20px",border:"2px solid black",padding:"30px",borderRadius:"30px 0px 30px 0px ",backgroundColor:"beige",margin:"20px"}}>
            <div>
                <img  onClick={navigates } width="300px" height="350px"  src={thumbnail} alt="" />
            </div>
            <div style={{display:"flex",gap:"20px",flexDirection:"column",textAlign:"left"}}>
                <h2  onClick={navigates}>{name}</h2>
                <p onClick={navigates}>{des.slice(0,200)}...</p>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p>Location : {location}</p>
                    <p><StarRating rating={rating}/></p>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p>Price :{price}</p>
                    <button style={{backgroundColor:"white",color:"black",border:"none",padding:"10px 20px"}}>Move to WishList</button>
                </div>
            </div>
        </div>
    )
}

// import { IoStarSharp } from "react-icons/io5";
function StarRating({rating}){
    let stars=[];
    for(let i=1;i<=Math.ceil(rating);i++){
        stars.push("⭐")
    }

    return stars;
}

export function Hi(){
    return(<div>
        <h1>hello</h1>
        </div>
    )
}
