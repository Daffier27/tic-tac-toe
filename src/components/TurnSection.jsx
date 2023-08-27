import Square from './Square';
import { TURNS } from '../helpers/constants';
import PropTypes from 'prop-types';

export default function TurnSection({ turn }) {
  return (
    <section className="turn-section">
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  );
}

TurnSection.propTypes = {
  turn: PropTypes.string.isRequired,
};
