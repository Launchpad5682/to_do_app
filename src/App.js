import "./App.css";
import React, { Component } from "react";
import InputBox from "./components/input";
import ProtoButton from "./components/button";
import Task from "./components/task";

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputBox />
        <ProtoButton />
        <ProtoButton />
        <ProtoButton />
        <Task />
      </div>
    );
  }
}

export default App;
