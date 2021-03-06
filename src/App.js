import React from 'react';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import BigButton from './components/BigButton';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';
import './App.css';

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className='app'>
      <div className='app__container'>
        <div className='app__todoContainer'>
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
        <Input />
        <BigButton name='Clear All' />
      </div>
    </div>
  );
}

export default App;
