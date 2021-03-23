import React from 'react';
import './BigButton.css';

export default ({ name }) => {
  return (
    <div className='BigButtonContainer'>
      <button className='BigButton'>{name}</button>
    </div>
  );
};
