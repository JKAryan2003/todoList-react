import React, { useState } from 'react'
import '../index.css'

const AddTask = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  function handleInput(e) {
    console.log(task);
    setTask(e.target.value)  
  }

  function handleClick() {
    console.log(taskList);
    setTaskList([...taskList, 
      {
        task: task,
        complete: false
      }])
  }

  return (
    <>
      <div className='addTask'>
        <input type="text" placeholder='New Task' value={task} onChange={handleInput} />
        <button onClick={handleClick}>Add Task</button>
      </div>
    </>
  )
}

export default AddTask