import "./info.css"
import { useContext } from "react"
import GameContext from "./GameContext"
const Info =()=>
{
    const {initialState,Over} = useContext(GameContext)
    const msg=(Over.sign)?Over.msg:initialState.msg
   return(
    <>
        <div className="field">{msg}</div>
    </>
   )
}

export default Info