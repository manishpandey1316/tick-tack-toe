import { useContext } from "react"
import GameContext from "./GameContext"
import "./reset.css"
const Reset=()=>
{
    const {dispatch} = useContext(GameContext)
    function handleClick()
    {
        console.log(1)
         dispatch({type:'reset'})
    }
    return(
        <>
         <button onClick={handleClick} className="layout">Reset</button>   
        </>
    )
}
export default Reset