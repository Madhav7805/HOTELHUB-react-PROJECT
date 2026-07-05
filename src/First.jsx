import { useEffect, useReducer, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtowish ,Remove} from "./redux/wishlist";

// import { IoStarSharp } from "react-icons/io5";
    // const [wishcount,setwish] = useState(true)

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
    // console.log(no_of_pages)

    let start=current*PAGE_SIZE;
    let end=start+PAGE_SIZE
   return (
  <>
    <div className="grid grid-cols-2 gap-[30px]">
      {data.map((el) => (
        <Product
        all = {el}
          id={el.id}
          name={el.name}
          thumbnail={el.thumbnail}
          des={el.description}
          location={el.location}
          rating={el.rating}
          price={el.price}
        />
      ))}
    </div>

    <div className="flex justify-center gap-[10px] m-[10px]">
      <button onClick={() => setCurrent(current - 1)}>
        {"<<<"}
      </button>

      {[...Array(no_of_pages).keys()].map((el) => {
        if (
          el === 0 ||
          el === no_of_pages - 1 ||
          (el >= current - 2 && el <= current + 2)
        ) {
          return (
            <button
              onClick={() => setCurrent(el)}
              className={
                current === el
                  ? "bg-[#0A2947] text-white px-3 py-1 rounded"
                  : "bg-[beige] text-black px-3 py-1 rounded"
              }
            >
              {el + 1}
            </button>
          );
        } else {
          return <span>.</span>;
        }
      })}

      <button onClick={() => setCurrent(current + 1)}>
        {">>>"}
      </button>
    </div>
  </>
)
}

export function Product({all,id ,name,thumbnail,des,location,rating,price}){
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const [wishcount,setwish] = useState(true)
    const data = useSelector((State)=>State.Hotels.hotels)
    console.log(data)
    useEffect(()=>{
     const value=data.some((item)=>item.id===id)
      if(value){
      setwish(false)
    }
    else setwish(true)
    },[data,id]);
    // const id = useRef(0)
    function navigates() {navigate(`/products/${id}`)}
   return (
  <div className="flex gap-[20px] border-2 border-black p-[30px] rounded-[30px_0px_30px_0px] bg-[beige] m-[20px]">
    <div>
      <img
        onClick={navigates}
        className="w-[800px] h-[300px]"
        src={thumbnail}
        alt=""
      />
    </div>

    <div className="flex flex-col gap-[20px] text-left">
      <h2 className="font-black text-2xl" onClick={navigates}>{name}</h2>

      <p onClick={navigates}>
        {des.slice(0, 200)}...
      </p>

      <div className="flex justify-between">
        <p>Location : {location}</p>
        <p>
          <StarRating rating={rating} />
        </p>
      </div>

      <div className="flex justify-between">
        <p className="font-extrabold">Price : {price}</p>

        <button onClick={wishcount?()=>{dispatch(addtowish(all)
        ); setwish(false) }:()=>{ dispatch(Remove(all)); setwish(true)}
        }  className={`${wishcount ? "bg-blue-700 font-black" : "bg-red-700"} ${wishcount ? "text-black" : "text-white"} border-none px-[20px] py-[10px]`}>
         {(wishcount)?"MOVE TO WISHLIST":"remove from WISHLIST"}
        </button>
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
