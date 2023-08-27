import PropTypes from 'prop-types'
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

  //Validation
  Winner.propTypes = {
    winner: PropTypes.string.isRequired
  }
