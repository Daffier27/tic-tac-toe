import {TURNS} from './constants'

export default function reset(setBoard, setTurn, setWinner) {
  setBoard(Array(9).fill(null));
  setTurn(TURNS.X);
  setWinner(null)
}
