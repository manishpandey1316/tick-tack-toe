import './App.css';
import Game from './components/Game';
import GameContext from './components/GameContext';
import {  useReducer, useState} from 'react';
function App() {

  const [Over,setOver]=useState({sign:false,msg:" "})
  function reducer(initialState,action)
  {
       
         switch(action.type)
       {
         
          case 'update':
                  
                   if(initialState.state[action.payload] === '0' && !Over.sign) 
                  {
                    const newState = { ...initialState }; // Create a new state object
                    newState.state[action.payload] = newState.player;
                    newState.msg = newState.player === '1' ? 'Player 2 turns' : 'Player 1 turns';
                    newState.player = newState.player === '1' ? '2' : '1';
                    return newState; // Return the new state
                  }
                  else 
                  {
                     return {...initialState,msg:"select empty block"}
                  }                                              
          case 'finish':
                   const newState={...initialState}
                  newState.msg=`Player ${action.payload} wins`
                  newState.gameOver=true
                  return newState
          case 'reset':
                  setOver(false)
                  const iniState={...initialState,...iState}            
                  return iniState
          default :
                   return initialState 
       }
 }
 const iState = {
  player:'1',
  state:['0','0','0','0','0','0','0','0','0'],
  msg:'Player 1 turns'
 }

 
 const [initialState,dispatch]=useReducer(reducer,iState)

 
  
  return (
    <>
    <GameContext.Provider value={{initialState,dispatch,Over,setOver}}>
    <Game></Game>
    </GameContext.Provider>
    </>
  );
}

export default App;
