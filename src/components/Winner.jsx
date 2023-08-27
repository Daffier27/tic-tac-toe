import PropTypes from 'prop-types'
export default function Winner({winner, mode}){
  if(winner === null){
    return
  }

  return(
    <section className={`winner-section ${mode === 'dark' ? 'dark-mode' : ''}`}>
      <p>{winner === 'Empate' ? 'Empate': `Ganó ${winner}`}</p>
    </section>
  )
}

  //Validation
  Winner.propTypes = {
    winner: PropTypes.string,
    mode: PropTypes.string.isRequired
  }
