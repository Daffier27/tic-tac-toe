//Importaciones de react
import { useState } from "react"
//Importaciones de Componenetes
import Square from "./Square"
//Otras Importaciones
import updateBoard from './helpers/updateBoard'


const TURNS = {
  X: 'x',
  O: 'o'
}


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  console.log(board)
  return(
    <>
      <h1>Tic Tac Toe</h1>
      <section 
      className="gameBoard"
      >
        {board.map((_, index) => (
        <Square key={index}
                updateBoard={() => updateBoard(turn, setTurn, board, setBoard, index)}
        >
        {board[index]}
        </Square>
      ))}
      </section>
      <section className="turn-section">
        <Square isSelected={turn === TURNS.X} >
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O} >
          {TURNS.O}
        </Square>
      </section>
    </>
  )
}

export default App
export { TURNS }