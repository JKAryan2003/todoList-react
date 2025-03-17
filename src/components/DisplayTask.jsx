import React from 'react'

const DisplayTask = ({todo}) => {
  return (
    <div>
      <span>{todo.task}</span>
      <span>{todo.id}</span>
    </div>
  )
}

export default DisplayTask