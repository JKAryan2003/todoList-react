import React, { useState } from "react";

const AddTask = ({ addTodo }) => {
  const [task, setTask] = useState("");

  function handleClick() {
    addTodo(task);
    setTask("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default AddTask;