import { useContext } from "react"
import Block from "./block"
import "./board.css"
import GameContext from "./GameContext"
const Board = ()=>
{
    const {initialState,dispatch} = useContext(GameContext)
  
  const updateState=(pos)=>
    {  
        dispatch({type:'update',payload:pos})
    }
    return(
        <>
          <div className="game-board">
            <Block onClick={()=>updateState(0)} id={initialState.state[0]}></Block>
            <Block onClick={()=>updateState(1)} id={initialState.state[1]}></Block>
            <Block onClick={()=>updateState(2)} id={initialState.state[2]}></Block>
            <Block onClick={()=>updateState(3)} id={initialState.state[3]}></Block>
            <Block onClick={()=>updateState(4)} id={initialState.state[4]}></Block>
            <Block onClick={()=>updateState(5)} id={initialState.state[5]}></Block>
            <Block onClick={()=>updateState(6)} id={initialState.state[6]}></Block>
            <Block onClick={()=>updateState(7)} id={initialState.state[7]}></Block>
            <Block onClick={()=>updateState(8)} id={initialState.state[8]}></Block>
         </div>
        </>
    )
}

export default Board