import PropTypes from 'prop-types'

export default function Square ({children, isSelected, updateBoard}){
  const squareClases = () => {
    return `square ${isSelected ? 'selected': ''}`
  }

  return(
    <div className = {squareClases()} onClick={updateBoard}>
      {children}
    </div>
  )
}

Square.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isSelected: PropTypes.bool.isRequired,
  updateBoard: PropTypes.func.isRequired,
}