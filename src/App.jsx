//Importaciones
import  { useState } from "react";

import Button from './components/Button';
import Winner from './components/Winner';
import Board from "./components/Board";
import TurnSection from "./components/TurnSection";


import reset from './helpers/reset';
import resetsvg from "./public/reset.svg";
import {TURNS} from './helpers/constants'





//Logica de la App
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null)

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board
      board={board}
      setBoard={setBoard}
      turn={turn}
      setTurn={setTurn} 
      winner={winner}
      setWinner={setWinner}
      />
      <TurnSection turn={turn} setTurn={setTurn}/>
      <Button svg={resetsvg} resetBoard={() => reset(setBoard, setTurn, setWinner)} />
      <Winner winner={winner}/> 
    </>
  );
}

//Exportaciones
export default App;

