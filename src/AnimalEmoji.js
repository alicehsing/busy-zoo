import React from 'react';

export default function AnimalEmoji(props) {
  return <div className="animal-item">
    <span>{props.animal === 'giraffe' && '🦒'}</span>
    <span>{props.animal === 'leopard' && '🐆'}</span>
    <span>{props.animal === 'kangaroo' && '🦘'}</span>
    <span>{props.animal === 'seal' && '🦭'}</span>
  </div>;
}
