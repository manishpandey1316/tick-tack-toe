import GameContext from "./GameContext";
import Board from "./board"
import Info from "./info";
import Reset from "./reset";
import { useContext, useEffect } from "react";

const Game=()=>
{
    const {initialState,setOver} = useContext(GameContext)
    useEffect(()=>
   {
    const combinations=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
     
   combinations.forEach((combination)=>
   {
    
       if(initialState.state[combination[0]]==='1' && initialState.state[combination[1]]==='1' && initialState.state[combination[2]]==='1')
       {
           setOver({sign:true,msg:"Player 1 wins"})
       }
       else if(initialState.state[combination[0]]==='2' && initialState.state[combination[1]]==='2' && initialState.state[combination[2]]==='2')
       {
           setOver({sign:true,msg:"Player 2 wins"})
       }
   })
},[initialState,setOver])

    return(
        <div style={{backgroundColor:"palegreen"}}>
            <Board></Board>
            <div style={{display:"flex"}}>
               <Info></Info>
               <Reset></Reset>
            </div>
        </div>
        
    )
}

export default Game
