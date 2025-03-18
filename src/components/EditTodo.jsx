import React, { useState } from "react";

const EditTodo = ({ editTodo, todo }) => {
  const [value, setValue] = useState(todo.task);

  function handleClick() {
   
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Save</button>
      <button>Cancel</button>
    </div>
  );
};

export default EditTodo;