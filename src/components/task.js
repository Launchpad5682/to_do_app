import React from "react";
// delete the tasks which are completed
export default class Task extends React.Component {
  state = {
    loading: true,
    tasks: null,
    done: true,
  };

  async componentDidMount() {
    const url = "http://localhost:5555/tasks";
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data[0].task);
    this.setState({ tasks: data[0].task, loading: false });
  }

  handleCheck = (event) => {
    this.setState({ done: event.target.checked });
  };

  render() {
    return (
      <dir className="task">
        <input
          type="checkbox"
          value={this.state.done}
          onChange={this.handleCheck}
        ></input>
        {this.state.loading || !this.state.tasks ? (
          <div>loading....</div>
        ) : (
          <div>{this.state.tasks}</div>
        )}
      </dir>
    );
  }
}
