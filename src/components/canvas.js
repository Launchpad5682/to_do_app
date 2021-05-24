import React, { useEffect, useState } from "react";
import ProtoButton from "./button";
import InputBox from "./input";
import Task from "./task";

export default function Canvas() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState(true);

  //onChange={handleCheck}
  useEffect(() => {
    fetch("http://localhost:5555/tasks")
      .then((res) => res.json())
      .then((data) => {
        console.log([data]);
        setTasks([...data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <dir className="canvas">
      <InputBox items={tasks} setItems={setTasks} />
      <ProtoButton buttonText="Delete Task" />
      <ProtoButton buttonText="Delete All the Tasks" />
      {!tasks ? (
        <div>loading....</div>
      ) : (
        tasks.map((task_item) => {
          return <Task key={task_item["_id"]["$oid"]} items={task_item} />;
        })
      )}
    </dir>
  );
}

/*
 {tasks.map((task) => {
        return <Task key={task["_id"]["$oid"]} task={task} />;
      })}*/
