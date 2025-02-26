import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleTask = () => {
    const newTask = { title, status: "Pending" };
    addTask(newTask);
    // console.log("New Task :", newTask);
  };

  return (
    <div>
      <div>
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="Add Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleTask}>Add Task</button>
      </div>
    </div>
  );
};

export default AddTask;
