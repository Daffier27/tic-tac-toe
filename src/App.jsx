import  { useState, useEffect } from "react";
import { CiUndo } from 'react-icons/ci';

import Button from './components/Button';
import Winner from './components/Winner';
import Board from "./components/Board";
import TurnSection from "./components/TurnSection";
import SwitchButton from "./components/SwitchButton";

import reset from './helpers/reset';
import resetsvg from "./public/reset.svg";
import { TURNS } from './helpers/constants'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null)
  const [mode, setMode] = useState('light')

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [mode]);

  return (
    <>
      <SwitchButton mode={mode} setMode={setMode}/>
      <h1>Tic Tac Toe</h1>
      <Board
        board={board}
        setBoard={setBoard}
        turn={turn}
        setTurn={setTurn} 
        winner={winner}
        setWinner={setWinner}
        mode={mode}
      />
      <TurnSection turn={turn} setTurn={setTurn} mode={mode}/>
      <Button svg={resetsvg} resetBoard={() => reset(setBoard, setTurn, setWinner)} mode={mode} >
        <CiUndo className='undo-icon'/>
      </Button>
      <Winner winner={winner} mode={mode} /> 
    </>
  );
}

export default App;
