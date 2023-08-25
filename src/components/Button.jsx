// eslint-disable-next-line react/prop-types
function Button({ svg, resetBoard }) {
  
  return (
    <button className="button" onClick={resetBoard}>
      <img src={svg} alt="Reset" />
    </button>
  );
}

export default Button;
