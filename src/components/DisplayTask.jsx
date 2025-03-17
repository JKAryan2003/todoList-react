import React from 'react'
import "../index.css"

const DisplayTask = ({taskList, setTaskList}) => {


  return (
    <>
      <table>
      {taskList.map( (task, i) => 
      <tr>
        <td>
          <p 
          onClick={() => completeTask(i)}
          className={(task.complete)? 'strike' : ''}>
            {(i+1) + " " + task.task}
          </p>
        </td>

        <td>
          <button>Edit</button>
        </td>

        <td>
          <button>Delete</button>
        </td>
      </tr>
     )}
      </table>
    </>
  )
}

export default DisplayTask