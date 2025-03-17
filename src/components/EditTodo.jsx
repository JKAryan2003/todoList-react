import React from 'react'

const EditTodo = () => {

  function handleEdit() {

  }
  
  return (
    <>
      <table>
        <tr>
          <td><input type="text" placeholder='New Task' value={task} onChange={handleInput} /></td>
          <td><button>Save</button></td>
          <td><button>Cancel</button></td>
        </tr>
      </table>
    </>
  )
}

export default EditTodo