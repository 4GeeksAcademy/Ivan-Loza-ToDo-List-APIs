import React, { useState } from "react";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (inputValue !== "") {
      const capitalizedTask =
        inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
      setTasks([...tasks, capitalizedTask]);
      setInputValue("");
    }
  }

  function removeTask(taskToRemove) {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  }

  function tasksLeft() {
    const tasksToDo = tasks.length;
    if (tasksToDo === 0) {
      return "Nothing to do...";
    }
    if (tasksToDo === 1) {
      return "Just " + tasksToDo + " task left to do!";
    }
    if (tasksToDo > 0) {
      return "Just " + tasksToDo + " tasks left to do!";
    }
  }

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="mt-5">
        <h1 className=" display-1 ">TO-DO LIST</h1>
        <div className="containter d-flex ">
          <input
            className="form-control"
            id="input"
            placeholder="What needs to be done?"
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addTask();
              }
            }}
          ></input>
        </div>
        <ul className="list-group mt-2">
          {tasks.map((task) => (
            <li className="list-group-item d-flex justify-content-between align-items-center ">
              {task}
              <button
                type="sm-button"
                className="removeButton btn btn-ligth btn-sm"
                onClick={() => removeTask(task)}
              >
                X
              </button>
            </li>
          ))}
        </ul>

        <p className="tasksLeft mt-1 ms-3">{tasksLeft()}</p>
      </div>
    </div>
  );
};

export default Home;
