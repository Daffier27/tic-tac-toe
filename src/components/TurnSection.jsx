import Square from './Square';
import { TURNS } from '../helpers/constants';
import PropTypes from 'prop-types';

export default function TurnSection({ turn, mode }) {
  return (
    <section className={`turn-section ${mode === 'dark' ? 'dark-mode' : ''}`}>
      <Square isSelected={turn === TURNS.X} mode={mode}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O} mode={mode}>{TURNS.O}</Square>
    </section>
  );
}

TurnSection.propTypes = {
  turn: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired
};
