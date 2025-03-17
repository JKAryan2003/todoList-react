import React, { useState } from 'react'

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
      <input type="text" placeholder='New Task' value={task} onChange={handleInput} />
      <button onClick={handleClick}>Add Task</button>
      <button onClick={() => setTask("")}>Clear</button>
    </>
  )
}

export default AddTask