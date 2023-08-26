// eslint-disable-next-line react/prop-types
function Button({ svg, resetBoard }) {
  
  return (
    <section className="reset-button">
      <button className="button" onClick={resetBoard}>
        <img src={svg} alt="Reset" />
      </button>
    </section>
  );
}

export default Button;
