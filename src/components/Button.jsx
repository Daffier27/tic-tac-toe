import PropTypes from 'prop-types'

export default function Button({ svg, resetBoard, mode }) {
  
  return (
    <section className="reset-button">
      <button className={`button ${mode==='dark' ? 'dark-mode' : ''}`} onClick={resetBoard}>
        <img src={svg} alt="Reset" />
      </button>
    </section>
  );
}

Button.propTypes = {
  svg: PropTypes.string.isRequired,
  resetBoard: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
};

