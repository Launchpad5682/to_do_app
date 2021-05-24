import React, { useEffect, useState } from "react";
import CheckBox from "./checkbox";
import DeleteIcon from "./deleteIcon";
// delete the tasks which are completed

export default function Task(props) {
  return (
    <dir className="task">
      <CheckBox />
      {props.items.task} <DeleteIcon />
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
