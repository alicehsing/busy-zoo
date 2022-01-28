import React from 'react';
import './Sign.css';

export default function Sign(props) {
  return <div> 
    {
      props.isOpen
        ? 
        <p>
          <span>O</span>
          <span>P</span>
          <span>E</span>
          <span>N</span>
        </p>

        : 
        <p>
          <span>C</span>
          <span>L</span>
          <span>O</span>
          <span>S</span>
          <span>E</span>
        </p>
    }
  </div>;
}
