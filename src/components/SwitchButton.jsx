import { CiDark, CiLight } from 'react-icons/ci';

export default function SwitchButton() {
  return (
    <label className="switch-button">
      <input type="checkbox" />
      <span className="slider"></span>
      <div className="icons-container">
      <CiLight className="icon-light" />
        <CiDark className="icon-dark" />
        
      </div>
    </label>
  );
}
