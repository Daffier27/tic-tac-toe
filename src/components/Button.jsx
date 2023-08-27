import PropTypes from 'prop-types'

export default function Button({ children, resetBoard, mode }) {
  
  return (
    <section className="reset-button">
      <button className={`button ${mode==='dark' ? 'dark-mode' : ''}`} onClick={resetBoard}>
        {children}
      </button>
    </section>
  );
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  resetBoard: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
};

