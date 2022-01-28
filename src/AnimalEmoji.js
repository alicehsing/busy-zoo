import React from 'react';

export default function AnimalEmoji(props) {
  return <span>
    {props.animal === 'giraffe' && '🦒'}
    {props.animal === 'seal' && '🦭'}
    {props.animal === 'leopard' && '🐆'}
    {props.animal === 'kangaroo' && '🦘'}
  </span>;
}
