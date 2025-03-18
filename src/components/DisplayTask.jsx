import React from 'react'
import '../index.css'

const DisplayTask = ({todo, toggleTask, deleteTodo, editTodo}) => {
  return (
    <div className="row shadow p-3 m-5 bg-body-tertiary rounded">
      <div className='col-md-6 fs-5'>
        <span onClick={() => toggleTask(todo.id)} className={ (todo.complete)? 'strike' : ''}>{todo.task}</span>
      </div>

      <div className='col-md-3'>
        <button onClick={() => editTodo(todo.id)} className='btn text-info fs-4'><i class="bi bi-pencil-fill"></i></button>
      </div>

      <div className='col-md-3'>
        <button onClick={() => deleteTodo(todo.id)} className='btn text-danger fs-4'><i class="bi bi-trash-fill"></i></button> 
      </div>
    </div>
  )
}

export default DisplayTask