import 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// css classes
const STYLES = ['btn--primary', 'btn--outline', 'btn--cta'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children, 
  type, 
  onClick, 
  buttonStyle, 
  buttonSize
}) => {
  //If the button component has a buttonstyle (true), otherwise applies 'btn--primary' class by default
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  
  return (
    <Link to='/logout' className='btn-mobile'>
      <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      >
        {children} 
      </button>
    </Link>
  )
};