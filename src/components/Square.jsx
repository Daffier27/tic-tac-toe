import PropTypes from 'prop-types'

export default function Square ({children, isSelected, updateBoard, mode}){
  

  return(
    <div className={`square ${isSelected ? 'selected': ''} ${mode === 'dark' ? 'dark-mode' : ''}`} 
    onClick={updateBoard}>
      {children}
    </div>
  )
}

Square.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isSelected: PropTypes.bool,
  updateBoard: PropTypes.func,
  mode: PropTypes.string
}