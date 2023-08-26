import Square from "./Square";
import updateBoard from '../helpers/updateBoard';

export default function Board({ board, setBoard, turn, setTurn, winner, setWinner }) {
  return (
    <section className="gameBoard">
      {board.map((_, index) => (
        <Square
          key={index}
          updateBoard={() => updateBoard(turn, setTurn, board, setBoard, index, winner, setWinner)}
        >
          {board[index]}
        </Square>
      ))}
    </section>
  );
}
