import React from "react";
import ProtoButton from "./button";
import InputBox from "./input";
import Task from "./task";

export default function Canvas() {
  return (
    <dir className="canvas">
      <InputBox />
      <ProtoButton buttonText="Delete Task" />
      <ProtoButton buttonText="Delete All the Tasks" />
      <Task />
    </dir>
  );
}
