import React from 'react';
import AnimalEmoji from './AnimalEmoji';


export default function Parade(props) {
  return <div>
    {
      props.animalArray.map((animal, i) => 
        <AnimalEmoji key={`${animal}-${i}`} animal={animal} />

      )}
  </div>;
}
