//Importaciones
import  { useState } from "react";
import Square from "./components/Square";
import Button from './components/Button';
import updateBoard from './helpers/updateBoard';
import reset from './helpers/reset';
import resetsvg from "./public/reset.svg";

//Variables
const TURNS = {
  X: 'x',
  O: 'o'
}

const WINS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

//Logica de la App
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(false)
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <section className="gameBoard">
        {board.map((_, index) => (
          <Square
            key={index}
            updateBoard={() => updateBoard(turn, setTurn, board, setBoard, index,  winner, setWinner)}
          >
            {board[index]}
          </Square>
        ))}
      </section>
      <section className="turn-section">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <section className="reset-button">
      <Button svg={resetsvg} resetBoard={() => reset(setBoard, setTurn, setWinner)} />
      </section>
    </>
  );
}

//Exportaciones
export default App;
export { TURNS, WINS };
