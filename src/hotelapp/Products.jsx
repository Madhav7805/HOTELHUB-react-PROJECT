import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Products(){
    let {name} = useParams()
    let [hotels, sethotels] = useState([])
    console.log(name)
    let url=`https://demohotelsapi.pythonanywhere.com/hotels/?name=${name}`
    useEffect(()=>{
        async function datafetch(){
                let res= await fetch(url) 
                    let hdata=await res.json()
                    sethotels(hdata.data)

            }

datafetch()
    },[name])
           let el=hotels[0]

           console.log(el)

        
    return(
        <> 
        <div className="flex items-center justify-center h-screen mt-50">
        <div className="w-370 h-150 flex  bg-amber-100  rounded-tl-3xl rounded-br-3xl  border-2  mt-10 font-bold ">
                        <img  className="h-120 w-200 m-10" src={el?.thumbnail} alt="" />
                        <div className="p-5 flex flex-col gap-10 mt-20">
                            <h1 className="font-black text-5xl">{el?.name}</h1>
                            <h1>{el?.description}...</h1>
                            <div className="flex m-3 justify-between"><h1 className="text-3xl">location-{el?.location}</h1>
                            <h1>{(el?.rating)}</h1>
                            </div>
                            <div className="flex justify-between m-3 gap-4"><h1 className="text-4xl text-red-600">{el?.price}</h1>
                            </div>
                        </div>
                    </div>
                    </div>
        </>
    )

    // function StarRating({rating}){
    // let stars=[];
    // for(let i=1;i<=Math.ceil(rating);i++){
    //     stars.push("⭐")
    // }

    // return stars;

}