import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addtowish ,Remove} from "../redux/wishlist";



export default function Cityhotel({city}){
    const [wishcount,setwish] = useState(true)
    const dispatch = useDispatch()
    const data = useSelector((State)=>State.Hotels.hotels)
    

    let [hdata,setdata] =useState([])
    let url = `https://demohotelsapi.pythonanywhere.com/hotels/?location=${city}`
        console.log("start")
    useEffect(()=>{
        console.log("ustart")

      async function dataFetch() {
     let  hdata = await fetch(url)
     let  hotlesnoida = await hdata.json()
      // console.log(hotlesdata.data)
      setdata(hotlesnoida.data)
      //  console.log(hdata)

    }
    dataFetch()
  
    
    },[city])
        console.log("end")

        function check(el){
         const value=data.some((item)=>item.id===el.id)
      if(value){
        dispatch(Remove(el))
      
    }
    else {dispatch(addtowish(el))
    }
    }

    

    
    return(
        <>
        <h1 className={`font-black text-red-800 text-8xl font-sans opacity-80 relative right-120 bottom-400`}>{city}</h1>
        <div className={` bg-linear-t from-orange-400 to-yellow-300 grid grid-cols-2 overflow-y-auto relative bottom-410 scroll-smooth rounded-2xl
 scrollbar-hide  px-10 shadow-2xl shadow-blue-800 scroll-py-0 w-350 h-100 left-20 border-red-800 border-0 mt-20`} >
 
            {hdata.map((el)=>{
                let isin =!( data.some((it)=>it.id==el.id))
                return(
                         <div className="w-150 h-90 flex shrink-0 bg-amber-100  rounded-tl-2xl rounded-br-2xl m-3 ">
                                        <img  className="h-80 w-70 m-2" src={el.thumbnail} alt="" />
                                        <div className="p-5 flex flex-col gap-5">
                                            <h1 className="font-black text-xl">{el.name}</h1>
                                            <h1 className="font-bold">{el.description.slice(0,100)}...</h1>
                                            <div className="flex m-3 justify-between font-black text-xl">
                                            <h1>{StarRating(el.rating)}</h1>
                                            </div>
                                            <div className="flex justify-between m-3 gap-4 font-black"><h1>{el.price}</h1>
                                            <button onClick={()=>{check(el)}}  className={`${isin ? "bg-blue-700 font-black" : "bg-red-700"} ${wishcount ? "text-black" : "text-white"} border-none px-[20px] py-[10px]`}>
                                                     {(isin)?"MOVE TO WISHLIST":"remove from WISHLIST"}
                                                    </button></div>
                                        </div>
                                    </div>)
              
            })
        }  
            </div>
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