// eslint-disable-next-line react/prop-types
export default function Square ({children, isSelected}){
  const squareClases = () => {
    return `square ${isSelected ? 'selected': ''}`
  }
  
  return(
    <div className = {squareClases()}>
      {children}
    </div>
  )
}