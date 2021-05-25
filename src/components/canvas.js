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
  // [] are dependencies

  const handleDelete = (id) => {
    // delete task
    // delete request and delete item from the tasks list

    let element = tasks.filter((x) => {
      return x["_id"]["$oid"] !== id;
    });

    setTasks(element);

    let url = "http://127.0.0.1:5555/delete_one/" + id;

    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = (id) => {
    alert();
    console.log("Update ", id);
  };

  /*
  <ProtoButton buttonText="Delete Task" />
  <ProtoButton buttonText="Delete All the Tasks" />
  */

  return (
    <dir
      className="canvas"
      style={{
        backgroundColor: "teal",
        padding: "1em",
        height: "800px",
        width: "1800px",
      }}
    >
      <div>
        <InputBox items={tasks} setItems={setTasks} />
      </div>
      {!tasks ? (
        <div>loading....</div>
      ) : (
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {tasks.map((task_item) => {
              return (
                <Task
                  key={task_item["_id"]["$oid"]}
                  items={task_item}
                  handleDelete={() => handleDelete(task_item["_id"]["$oid"])}
                  handleUpdate={() => handleUpdate(task_item["id"]["$oid"])}
                />
              );
            })}
          </div>
        </div>
      )}
    </dir>
  );
}
