import React from "react";

const initialState = {
  task: "",
};

// shouldn't be empty
export default class InputBox extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckBox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckBox
        ? event.target.checked
        : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState(initialState);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        ></input>
        <button type="submit">Add Task</button>
      </form>
    );
  }
}
