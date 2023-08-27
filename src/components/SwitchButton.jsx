import { CiDark, CiLight } from 'react-icons/ci';
import switchMode from '../helpers/switchMode'
import PropTypes from 'prop-types'

export default function SwitchButton({mode, setMode}) {
  
  return (
    <label className="switch-button">
      <input type="checkbox" onClick={() => switchMode(mode, setMode)}/>
      <span className="slider"></span>
      <div className="icons-container">
        <CiLight className="icon-light" />
        <CiDark className="icon-dark" />
      </div>
    </label>
  );
}

SwitchButton.propTypes = {
  mode: PropTypes.string,
  setMode: PropTypes.func
};