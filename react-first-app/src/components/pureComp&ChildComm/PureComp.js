import React, { Component, PureComponent } from "react";

// class PureComp extends Component {
class PureComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({ count: this.state.count+1 });
  };
  render() {
    console.log(`Inside Render`);
    return (
      <>
        <h2>Pure Component</h2>
        <h4>
          Count:{this.state.count}
          <button
            type="button"
            onClick={this.incrementCount}
            className="btn btn-secondary"
          >
            +
          </button>
        </h4>
      </>
    );
  }
  static getDerivedStateFromProps(props) {
    console.log("Inside getDerivedStateFromProps");
    return null;
  } 
//   shouldComponentUpdate() {
//     console.log("Inside Should component update");
//     return true; 
//   }
  getSnapshotBeforeUpdate() {
    console.log("Inside getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log(` Inside componentDidUpdate`);
    return null;
  }
}
export default PureComp;
