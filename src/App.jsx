import Square from "./Square"

const board = Array(9).fill(null)
function App() {
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <section className="gameBoard">
        {board.map((_, index) => (
        <Square key={index}>
        
        </Square>
      ))}
      </section>
    </>
  )
}

export default App
