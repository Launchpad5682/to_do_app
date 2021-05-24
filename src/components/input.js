import React, { useEffect, useState } from "react";
// shouldn't be empty
export default function InputBox(props) {
  const [task, setData] = useState("");
  const { items, setItems } = props;

  const addTask = () => {
    fetch("http://127.0.0.1:5555/add_task", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: task, done: false }),
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // adding the items or tasks to the Tasks list
        setItems([...items, { _id: { data }, task: task, done: false }]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (event) => {
    console.log(event.target.value, task);
    setData(event.target.value);
    console.log(event.target.value, task);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask();
    setData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={task}
        onChange={handleChange}
      ></input>
      <button type="submit">Add Task</button>
    </form>
  );
}
