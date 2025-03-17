import React, { useState } from 'react'
import '../index.css'
import DisplayTask from './DisplayTask';

const AddTask = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  function handleInput(e) {
    setTask(e.target.value)  
  }

  function handleClick() {
    setTaskList([...taskList, 
      {
        task: task,
        complete: false,
        isEditing: false
      }])
  }

  return (
    <>
      <div className='addTask'>
        <input type="text" placeholder='New Task' value={task} onChange={handleInput} />
        <button onClick={handleClick}>Add Task</button>
        <DisplayTask taskList={taskList} setTaskList={setTaskList} />
      </div>
    </>
  )
}

export default AddTask