import React from 'react'
import '../index.css'

const DisplayTask = ({todo, toggleTask, deleteTodo, editTodo}) => {
  return (
    <div>
      <span onClick={() => toggleTask(todo.id)} className={(todo.complete)? 'strike' : ''}>{todo.task}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button onClick={() => editTodo(todo.id)}>Edit</button>
    </div>
  )
}

export default DisplayTask