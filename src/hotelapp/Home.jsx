// import ProductsListings from "../First";
import { useState } from "react"
import  "../App.css"
import hotelbg from "../assets/hotelbg.jpg"
import { useSelector ,useDispatch } from "react-redux"
import { useEffect } from "react"
import Cityhotel from "./Cityhotel"
import { addtowish ,Remove} from "../redux/wishlist";
import { addtoinput} from "../redux/inputdata";
import {Link, useNavigate} from "react-router-dom"





export default function Home(){
    let [showform,setshowform]=useState(false)
    let [guest , setguest]=useState(1)
    let [room , setroom]=useState(1)
    let [hdata,setdata] =useState([])
    let [checkin , setcheckin]=useState("")
    let [checkout , setcheckout]=useState("")
    let [location , setloc]=useState("")
    let [groom, setgroom]=useState("")
    let navigate= useNavigate()
    
    
    let idata = {checkin,checkout,location,groom }


    let url = "https://demohotelsapi.pythonanywhere.com/hotels/?location=Noida"
    const data = useSelector((State)=>State.Hotels.hotels)
    const dispatch = useDispatch()



    useEffect(()=>{
      async function dataFetch() {
     let  data = await fetch(url)
     let  hotlesnoida = await data.json()
      // console.log(hotlesdata.data)
      setdata(hotlesnoida.data)
      //  console.log(hdata)

    }
    dataFetch()
    },[])
     function check(el){
             const value=data.some((item)=>item.id===el.id)
          if(value){
            dispatch(Remove(el))
          
        }
        else {dispatch(addtowish(el))
        }
        }
     
    // let hotels=useSelector((state)=>state.Hotels.hotels)
    return(
      <>
        <div className=" flex flex-cols  bg-cover h-600 items-center justify-between text-center  overflow-y-auto bg-fixed z-0 mt-25 scroll-py-20"
        style={{backgroundImage:`url(${hotelbg})` }}
       >
            {/* <div
                className="bg-linear-to-r from-[#0c1254] to-[#710e4d] rounded-[135%_90%_90%_135%] h-[500px] w-[800px] 
                m-[70px] flex items-center justify-center opacity-80 blur-[5px] relative left-[300px] z-0">
            </div> */}
            <div className="bg-black ">
            <h1  className="text-5xl absolute top-50 left-40 font-black bg-black text-white opacity-50 p-5 rounded-2xl">"Find Your Perfect Stay, Wherever Life Takes You"</h1>
            <h1 className="text-4xl absolute top-70 left-45 font-black bg-black text-white opacity-50 p-3 m-2 rounded-2xl">Comfort, luxury, and unforgettable experiences—all in one place</h1>
            </div>

            <div
                className="absolute top-[430px] left-[400px] flex  gap-[10px]
                h-[90px] rounded-[20px] bg-black items-center w-200 justify-evenly opacity-80 shadow-2xl shadow-amber-700"  >
                {/* <input
                className="bg-linear-65 from-purple-500 to-pink-500 w-[600px] h-[50px] rounded-t-[20px] z-1"
                type="text"
                placeholder="SEARCH YOUR HOTEL"/> */}

              
     

                <input
                  className="bg-amber-50 relative h-10 rounded-[20px]"
                  type="date" onChange={(e)=>(setcheckin(e.target.value))}
                />

      

                  <input
                    className="bg-amber-50 relative h-10 rounded-[20px]"
                    type="date" onChange={(e)=>(setcheckout(e.target.value))}/>
              

              {/* <div className="flex gap-[50px] justify-evenly"> */}
                <input
                  className="bg-amber-100 w-[100px] h-[40px] m-2 rounded-[20px]"
                  type="text"
                  placeholder="     location" onChange={(e)=>(setloc(e.target.value))}/>

              <div className="flex flex-col relative w-40 bg-amber-100 rounded-[20px]">
                <input onChange={(e)=>(setgroom(e.target.value))}
                  className="bg-beige-700 h-10 rounded-[20px]"
                  onClick={() => {
                    setshowform(!showform);
                  }}
                  type="text"
                  placeholder={
                    showform
                      ? "    guest and rooms"
                      : `${guest} guest ${room} room` }/>

                {showform && (
                  <div className="w-40 h-25 bg-white p-[10px] absolute top-10 z-10 font-extrabold">
                    <div className="flex justify-between gap-2 w-30">
                      <label>guest</label>

                      <button
                        onClick={() => {
                          setguest(guest + 1);
                        }}
                        className="h-[20px]">
                        +
                      </button>

                      <h3 className="m-0">{guest}</h3>

                      <button onClick={() => {setguest(Math.max(1, guest - 1)); }}
                        className="h-[20px]" >- </button>
                    </div>

                    <div className="flex justify-between mt-[20px] gap-2 w-30">
                      <label>Room</label>

                      <button
                        className="h-[20px]"
                        onClick={() => {
                          setroom(room + 1);
                        }} >
                        +
                      </button>

                      <h3 className="m-0">{room}</h3>

                      <button
                        className="h-[20px]"
                        onClick={() => {
                          setroom(Math.max(1, room - 1));
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                )}
              </div>

    <button type="submit" onClick={()=>{dispatch(addtoinput(idata)); navigate("/search");}}
      className="bg-linear-to-t from-red-500 to-yellow-500 h-[40px] w-[50px] relative rounded-[20px]">
      search
      </button>
  </div>
 <h1 className="font-black text-blue-600 text-8xl font-sans opacity-80 absolute left-15 top-170">NOIDA</h1>
                  
</div>
<div className="  flex overflow-x-auto relative bottom-420 scroll-smooth
 scrollbar-hide  px-10 shadow-2xl shadow-blue-800 scroll-py-10 w-350 left-20 border-blue-600 border-0" >
 
            {hdata.map((el)=>{
                let isin =!( data.some((it)=>it.id==el.id))
                function navigates() {navigate(`/products/${el.name}`)}
                          return(
                         <div className="w-110 h-80 flex shrink-0 bg-amber-100  rounded-tl-2xl rounded-br-2xl m-3  ">
                                        <img onClick={navigates} className="h-70 w-40 m-2" src={el.thumbnail} alt="" />
                                        <div className="p-5 flex flex-col gap-5">
                                            <h1 onClick={navigates} className="font-black text-xl">{el.name}</h1>
                                            <h1 onClick={navigates}>{el.description.slice(0,80)}...</h1>
                                            <div className="flex m-3 justify-between"><h1 className="font-black">{el.price}</h1>
                                            <h1>{StarRating(el.rating)}</h1>
                                            </div>
                                            <div className="flex justify-between m-3 items-center">
                                            <button onClick={()=>{check(el)}}  className={`${isin ? "bg-blue-700 font-black" : "bg-red-700"} ${isin ? "text-black" : "text-white"} border-none px-[20px] py-[10px]`}>
                                                     {(isin)?"MOVE TO WISHLIST":"remove from WISHLIST"}
                                                    </button></div>
                                        </div>
                                    </div>)
              
})
            }  
            </div>

            {/* <Cityhotel city="Noida" color="red"/> */}
          
            <Cityhotel city="MUMBAI"  className="relative bottom-700 top-100 "/>
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