import { useDispatch, useSelector } from "react-redux"
import { Remove } from "../redux/wishlist";


export default function Wishlist(){
    const items = useSelector((State)=>State.Hotels.hotels)
    const remove = useDispatch()
    console.log(items)
    
    return(
            <> 
             { (items.length!=0)? items.map((el)=>{
            <div className="grid grid-cols-2 gap-20 m-10 text-center">
            return( <div className="w-170 h-90 flex flex-row bg-amber-100  rounded-tl-2xl rounded-br-2xl m-3">
                <img  className="h-70 w-70 m-2" src={el.thumbnail} alt="" />
                <div className="p-5 flex flex-col gap-5">
                    <h1>{el.name}</h1>
                    <h1>{el.description.slice(0,150)}...</h1>
                    <div className="flex m-3 justify-between"><h1>location-{el.location}</h1>
                    <h1>{StarRating(el.rating)}</h1>
                    </div>
                    <div className="flex justify-between m-3 gap-4"><h1>{el.price}</h1>
                    <button className="bg-red-600 p-5 rounded-2xl" onClick={()=>{
                        remove(Remove(el))
                    }}>remove from wishlist</button></div>
                </div>
            </div>)
        </div>})
    :(<h1 className="text-4xl text-center font-black decoration-dotted m-50 ">no hotel in wishlist</h1>)
             }   
         </>
    )

    function StarRating(rating){
    let stars=[];
    for(let i=1;i<=Math.ceil(rating);i++){
        stars.push("⭐")
    }

    return stars;
}
}