import Square from './Square'
import {TURNS} from '../helpers/constants'


export default function TurnSection ({turn}) {
  return(
    <section className="turn-section">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
  )
}