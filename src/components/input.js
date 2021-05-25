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
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter the Task"
        type="text"
        name="task"
        value={task}
        onChange={handleChange}
      ></input>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
}
