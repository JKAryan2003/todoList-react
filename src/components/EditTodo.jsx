import React, { useState } from "react";

const EditTodo = ({ editTask, todo }) => {
  const [value, setValue] = useState(todo.task);

  return (
    <div className="row p-3 m-5">
      <div className="col-md-6">
        <input
          type="text"
          placeholder="Update Task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="py-2 rounded-1 w-100"
        />
      </div>

      <div className="col-md-3">
        <button onClick={() => {editTask(value, todo.id); console.log("hello");
        }} className="btn btn-info">Save</button>
      </div>

      <div className="col-md-3">
        <button className="btn btn-danger">Cancel</button>
      </div>
    </div>
  );
};

export default EditTodo;