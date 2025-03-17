import React from 'react'
import "../index.css"
import EditTodo from './EditTodo';

const DisplayTask = ({taskList, setTaskList}) => {

  function completeTask (index) {
    const updatedList = taskList.map( (task, i) => {
      if (index == i) {
  
        if (task.complete === false){
          return {
            ...task, complete: !task.complete 
          };
        }
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
        {taskList.map( (task, i) => (
          task.isEditing ? (
           <EditTodo />
          ) : (
            <tr>
              <td>
                <p 
                onClick={() => completeTask(i)}
                className={(task.complete)? 'strike' : ''}>
                  {(i+1) + " " + task.task}
                </p>
              </td>

              <td>
                <button onClick={() => editTask(i)}>Edit</button>
              </td>

              <td>
                <button onClick={() => deleteTask(i)}>Delete</button>
              </td>
            </tr>
          )
        )
            
        )}
      </table>
    </>
  )
}

export default DisplayTask