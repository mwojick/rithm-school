import React from 'react';
import './CircleButton.css';

export default function CircleButton(props) {
  return (
    <div className="circle_button" onClick={props.generateRandomColor}>
      <h1>CHANGE</h1>
    </div>
  );
}
