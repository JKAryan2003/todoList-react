import React, { useState } from 'react'
import AddTask from './AddTask'
import EditTodo from './EditTodo';
import DisplayTask from './DisplayTask';

let id = 0;

const TodoMain = () => {

  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([
      ...todos,
      {
        id: id++,
        task: todo,
        complete: false,
      },
    ]);
  }

  function toggleTask(index) {

    const updatedList = todos.map((todo, i) => {
      if (index === i) {
        return {
          ...todo, complete: !todo.complete
        }
      }

      return {
        ...todo
      }
    })

    setTodos(updatedList)
  }

  return (
    <div>
      <h1>Todo list</h1>
      <AddTask addTodo={addTodo}/>

      {todos.map((todo, index) => 
      todo.isEditing ? 
      (<EditTodo />) : 
      (<DisplayTask todo={todo} toggleTask={toggleTask}/>))}
    </div>
  )
}

export default TodoMain
