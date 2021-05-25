import React from "react";
import DeleteIcon from "./deleteIcon";
import EditIcon from "./editIcon";
// delete the tasks which are completed

export default function Task(props) {
  return (
    // <CheckBox />
    <dir
      className="max-w-sm rounded overflow-hidden shadow-lg"
      style={{ backgroundColor: "green", padding: "1em" }}
    >
      {props.items.task}
      <EditIcon handleUpdate={props.handleUpdate} />
      <DeleteIcon handleDelete={props.handleDelete} />
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
