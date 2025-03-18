import React, { useState } from "react";

const EditTodo = ({ editTask, todo }) => {
  const [value, setValue] = useState(todo.task);

  return (
    <div>
      <input
        type="text"
        placeholder="Update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => editTask(value, todo.id)}>Save</button>
      <button>Cancel</button>
    </div>
  );
};

export default EditTodo;