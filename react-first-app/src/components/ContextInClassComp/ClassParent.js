import React, { Component } from "react";
import ClassChild1 from "./ClassChild1";
import MyMessage from "./createContext";

class ClassParent extends Component {
  render() {
    let message = "Welcome to codemind Technology";
    return (
      <div>
        <h1>Class based Parent Component</h1>
        <h3>Message In ParentComp:{message}</h3>
        <MyMessage.Provider value={message}>
          <ClassChild1 />
        </MyMessage.Provider>
      </div>
    );
  }
}
export default ClassParent;
