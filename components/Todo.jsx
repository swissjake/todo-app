import React from 'react'
import { useSelector } from 'react-redux';
import  { selectItems }  from '../slice/todo';
import TodoList from './TodoList';

const Todo = () => {
    const items = useSelector(selectItems);

  return (
      <section>
    <div>
        {
        items.map((item, i) => (
            <TodoList
              key={i} 
              name = {item.item}
              done = {item.done}
              id ={item.id}
              min = {item.min}
            />
        ))
        }
    </div>
    </section>
  )
}

export default Todo;