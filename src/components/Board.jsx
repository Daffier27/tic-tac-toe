import Square from "./Square";
import updateBoard from '../helpers/updateBoard';
import PropTypes from 'prop-types'

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

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.string).isRequired,
  setBoard: PropTypes.func.isRequired,
  turn: PropTypes.string.isRequired,
  setTurn: PropTypes.func.isRequired,
  winner: PropTypes.string,
  setWinner: PropTypes.func.isRequired,
};