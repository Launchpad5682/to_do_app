import React, { useEffect, useState } from "react";
// delete the tasks which are completed

export default function Task() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState(true);

  //onChange={handleCheck}

  useEffect(() => {
    fetch("http://localhost:5555/tasks")
      .then((task) => task.json())
      .then((data) => setTasks([...data]))
      .then(setLoading(false));
  }, []);

  return (
    <dir className="task">
      <input type="checkbox" value={done}></input>
      {loading || !tasks ? (
        <div>loading....</div>
      ) : (
        tasks.map((task) => <div key={task["_id"]["$oid"]}>{task.task}</div>)
      )}
    </dir>
  );
}

/* 
  async componentDidMount() {
    const url = "http://localhost:5555/tasks";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ tasks: data, loading: false });
  }

  handleCheck = (event) => {
    this.setState({ done: event.target.checked });
  };
*/
