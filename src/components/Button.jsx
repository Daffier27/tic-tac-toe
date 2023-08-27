import PropTypes from 'prop-types'

export default function Button({ svg, resetBoard }) {
  
  return (
    <section className="reset-button">
      <button className="button" onClick={resetBoard}>
        <img src={svg} alt="Reset" />
      </button>
    </section>
  );
}

Button.propTypes = {
  svg: PropTypes.string.isRequired,
  resetBoard: PropTypes.func.isRequired,
};

