import { TURNS } from '../App';

export default function updateBoard(turn, setTurn, board, setBoard, index) {   
  const updatedBoard = [...board];

  if (turn === TURNS.X && board[index] === null) {
    updatedBoard[index] = TURNS.X;
    setTurn(TURNS.O);
  } else if (turn === TURNS.O && board[index] === null) {
    updatedBoard[index] = TURNS.O;
    setTurn(TURNS.X);
  }

  setBoard(updatedBoard);
}
