import { useState } from "react"
import Square from "./Square"

const TURNS = {
  X: 'x',
  O: 'o'
}


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <section 
      className="gameBoard"
      >
        {board.map((_, index) => (
        <Square key={index}>

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
