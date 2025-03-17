import React from 'react'
import '../index.css'

const DisplayTask = ({todo, toggleTask, deleteTodo}) => {
  return (
    <div >
      <span onClick={() => toggleTask(todo.id)} className={(todo.complete)? 'strike' : ''}>{todo.task}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default DisplayTask