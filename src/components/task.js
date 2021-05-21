import React from "react";

export default class Task extends React.Component {
  state = {
    loading: true,
    tasks: null,
  };

  async componentDidMount() {
    const url = "http://localhost:5555/tasks";
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data[0].task);
    this.setState({ tasks: data[0].task, loading: false });
  }

  render() {
    return (
      <dir className="task">
        {this.state.loading || !this.state.tasks ? (
          <div>loading....</div>
        ) : (
          <div>{this.state.tasks}</div>
        )}
      </dir>
    );
  }
}
