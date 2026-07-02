import { useParams } from "react-router-dom"

export default function Products(){
    let {id} = useParams()
    return(
        <>
        <h1>Product:{id}</h1>
        </>
    )
}