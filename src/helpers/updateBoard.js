import {TURNS} from '../App'
export default function updateBoard (turn, setTurn) {
  
  if(turn === TURNS.X){
    setTurn(TURNS.O)
  }else if(TURNS.O){
    setTurn(TURNS.X)
  }
}