import React from 'react';
import Input from './components/Input';
import './App.css';
import TodoItem from './components/TodoItem';

const todoList = [
  { item: 'todo', done: false, id: 123123 },
  { item: 'todosadas', done: true, id: 12313213 },
];

function App() {
  return (
    <div className='app'>
      <div className='app__container'>
        <div className='app__todoContainer'>
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
