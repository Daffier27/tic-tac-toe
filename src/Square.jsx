// eslint-disable-next-line react/prop-types
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