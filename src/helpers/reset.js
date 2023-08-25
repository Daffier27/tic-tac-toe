import {TURNS} from '../App';

export default function reset(setBoard, setTurn) {
  setBoard(Array(9).fill(null));
  setTurn(TURNS.X);
}
