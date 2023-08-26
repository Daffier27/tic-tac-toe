import { TURNS } from '../App';
import checkWinner from './checkWinner';

export default function updateBoard(turn, setTurn, board, setBoard, index,  winner, setWinner) {   
  const updatedBoard = [...board];
  if(winner){
    return
  }


  if (turn === TURNS.X && updatedBoard[index] === null  ) {
    updatedBoard[index] = TURNS.X;
    setTurn(TURNS.O);
  } else if (turn === TURNS.O && updatedBoard[index] === null) {
    updatedBoard[index] = TURNS.O;
    setTurn(TURNS.X);
  }
  setBoard(updatedBoard);

  const newWinner = checkWinner(updatedBoard)
  
  if(newWinner){
    setWinner(() => newWinner)
  }
}
