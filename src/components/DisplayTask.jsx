import React from 'react'
import "../index.css"

const DisplayTask = ({taskList, setTaskList}) => {

  function completeTask (index) {
    const updatedList = taskList.map( (task, i) => {
      if (index === i) {
          return {
            ...task, complete: !task.complete 
          }
      }
      return {
        ...task
      }
    });
  
    setTaskList(updatedList)
  }

  function deleteTask (index) {

    const deletedList = taskList.filter((task, i) => {
      if (index != i) {
        return {
          ...task
        }
      }
    })
  
    setTaskList(deletedList)
  }

  return (
    <>
      <table>
      {taskList.map( (task, i) => 
        <tbody>
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
              <button onClick={() => deleteTask(i)}>Delete</button>
            </td>
          </tr>
        </tbody>
      )}
      </table>
    </>
  )
}

export default DisplayTask