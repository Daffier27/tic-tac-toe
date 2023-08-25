import { TURNS } from '../App';

export default function updateBoard(turn, setTurn, board, setBoard, index) {
  // Copia el tablero actual antes de modificarlo
  const updatedBoard = [...board];

  if (turn === TURNS.X && board[index] === null) {
    updatedBoard[index] = TURNS.X;
    setTurn(TURNS.O);
  } else if (turn === TURNS.O && board[index] === null) {
    updatedBoard[index] = TURNS.O;
    setTurn(TURNS.X);
  }

  // Actualiza el estado del tablero con el nuevo tablero modificado
  setBoard(updatedBoard);
}
