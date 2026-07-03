// import ProductsListings from "../First";
import { useState } from "react"
import  "../App.css"

export default function Home(){
    let [showform,setshowform]=useState(false)
    let [guest , setguest]=useState(1)
    let [room , setroom]=useState(1)
    return(
        <div>
            <div
                className="homediv "className="bg-linear-to-r from-[#0c1254] to-[#710e4d] rounded-[135%_90%_90%_135%] h-[500px] w-[800px] 
                m-[70px] flex items-center justify-center opacity-80 blur-[5px] relative left-[300px] z-0">
            </div>

            <div
                className="absolute top-[300px] left-[500px] flex flex-col gap-[30px]
                h-[300px] rounded-[20px] bg-gradient-to-bl from-violet-500 to-fuchsia-500" >
                <input
                className="bg-linear-65 from-purple-500 to-pink-500 w-[600px] h-[50px] rounded-t-[20px] z-[1]"
                type="text"
                placeholder="SEARCH YOUR HOTEL"/>

    <div className="flex flex-row w-[100px] gap-[50px]">
      <label>checkin</label>

      <input
        className="bg-amber-50 relative"
        type="date"
      />

      <label>checkout</label>

      <input
        className="bg-amber-50 relative"
        type="date"
      />
    </div>

    <div className="flex gap-[50px] justify-evenly">
      <input
        className="bg-blue-500 w-[100px] h-[20px]"
        type="text"
        placeholder="location"
      />

      <div className="flex flex-col relative w-40">
        <input
          className="bg-white"
          onClick={() => {
            setshowform(!showform);
          }}
          type="text"
          placeholder={
            showform
              ? "guest and rooms"
              : `${guest} guest ${room} room`
          }
        />

        {showform && (
          <div className="w-40 h-25 bg-white p-[10px] absolute top-6 z-10 font-extrabold">
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
    </div>

    <button
      className="bg-linear-to-t from-red-500 to-yellow-500 h-[20px] w-[200px] relative left-[200px]"
    >
      search
    </button>
  </div>
</div>
    )
}