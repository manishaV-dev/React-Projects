import React, { useState } from "react";
import AddTask from "./AddTask";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { title: "Task 1", status: "Pending" },
    { title: "Task 2", status: "Completed" },
  ]);

  const [filterTask, setFilterTask] = useState("All");

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleToggleState = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index
          ? {
              ...task,
              status: task.status === "Pending" ? "Completed" : "Pending",
            }
          : task
      )
    );
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const FilterData = tasks.filter(
    (task) => filterTask === "All" || task.status === filterTask
  );

  return (
    <>
      <h3>Task List</h3>

      <AddTask addTask={addTask} />

      <div>
        <label htmlFor="">Filter Task</label>
        <select
          value={filterTask}
          onChange={(e) => setFilterTask(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div style={{ width: "500px" }}>
        {/* {tasks.map((task, index) => ( */}
        {FilterData.map((task, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            className="card"
          >
            {task.status === "Completed" ? (
              <p style={{ textDecoration: "line-through" }}>{task.title}</p>
            ) : (
              <p>{task.title}</p>
            )}
            <button onClick={() => handleToggleState(index)}>
              {task.status}
            </button>{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;
