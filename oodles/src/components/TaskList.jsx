import React, { useState } from "react";
import AddTask from "./AddTask";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { title: "Task 1", status: "Pending" },
    { title: "Task 2", status: "Completed" },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <h3>Task List</h3>

      <AddTask addTask={addTask} />

      <div style={{ width: "500px" }}>
        {tasks.map((task, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            className="card"
          >
            <p>{task.title}</p>
            <button>{task.status}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;
