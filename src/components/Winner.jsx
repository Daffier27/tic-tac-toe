export default function Winner({winner}){
  if(winner === null){
    return
  }

  return(
    <section className="winner-section">
      <p>{winner === 'Empate' ? 'Empate': `Ganó ${winner}`}</p>
    </section>
  )
}