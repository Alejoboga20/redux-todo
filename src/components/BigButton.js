import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAll } from '../features/todoSlice';
import './BigButton.css';

export default ({ name }) => {
  const dispatch = useDispatch();

  const handleClearAll = () => {
    dispatch(clearAll());
  };

  return (
    <div className='BigButtonContainer'>
      <button className='BigButton' onClick={handleClearAll}>
        {name}
      </button>
    </div>
  );
};
