export default function Winner({winner}){
  
  return(
    <section className="winner-section">
      <p>{winner === 'Empate' ? 'Empate': `Ganó ${winner}`}</p>
    </section>
  )
}