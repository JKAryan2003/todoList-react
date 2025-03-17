import React from 'react'
import '../index.css'

const DisplayTask = ({todo, toggleTask}) => {
  return (
    <div onClick={() => toggleTask(todo.id)}>
      <span className={(todo.complete)? 'strike' : ''}>{todo.task}</span>
    </div>
  )
}

export default DisplayTask