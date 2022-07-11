import React from 'react';
import './MyButton.scss';

function MyButton({ onClick, text }) {
  return (
    <div onClick={onClick} role="button" tabIndex="0" className="my-btn">
      {text}
    </div>
  );
}

export default MyButton;
