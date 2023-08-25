import  { useState } from "react";
import Square from "./components/Square";
import Button from './components/Button';
import updateBoard from './helpers/updateBoard';
import reset from './helpers/reset';
import resetsvg from "../public/reset.svg";

const TURNS = {
  X: 'x',
  O: 'o'
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <section className="gameBoard">
        {board.map((_, index) => (
          <Square
            key={index}
            updateBoard={() => updateBoard(turn, setTurn, board, setBoard, index)}
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
      <Button svg={resetsvg} resetBoard={() => reset(setBoard, setTurn)} />
      </section>
    </>
  );
}

export default App;
export { TURNS };
