// import ProductsListings from "../First";
import  "../App.css"

export default function Home(){
    return(
        < div >
        <div className="homediv" style={{background:"linear-gradient(to right, #0c1254, #710e4d)",borderRadius:"135% 90% 90% 135%",
        height:"500px",width:"800px",margin:"70px",display:"flex",alignItems:"center",justifyContent:"center",
        opacity:".8",filter:"blur(5px)",position:"relative",left:"300px",zIndex:"0"

        }}></div>
        <input style={{width:"600px",height:"50px",borderRadius:"30px 0px 30px 0px"
            ,position:"absolute",bottom:"270px",right:"390px",zIndex:"1"}}type="text" placeholder="SEARCH YOUR HOTEL" />
        </div>
    )
}