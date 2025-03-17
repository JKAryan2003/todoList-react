import React, { useState } from 'react'
import AddTask from './AddTask'
import EditTodo from './EditTodo';
import DisplayTask from './DisplayTask';

let id = 0;

const TodoMain = () => {

  return (
    <div>
      <h1>Todo list</h1>
      <AddTask addTodo={addTodo}/>

      {todos.map((todo, index) => 
      todo.isEditing ? 
      (<EditTodo />) : 
      (<DisplayTask todo={todo}/>))}
    </div>
  )
}

export default TodoMain
