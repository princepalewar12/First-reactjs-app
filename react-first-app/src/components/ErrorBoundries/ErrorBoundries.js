import React, { Component } from "react";

export default class ErrorBoundaries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error occurred:", error, errorInfo);
    this.setState({
      hasError: true,
      error: error,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Oops! Something went wrong.</h1>
          <p>Sorry, an error occurred: {this.state.error.message}</p>
          {/* Optionally display stack trace: <p>Stack trace: {this.state.error.stack}</p> */}
        </>
      );
    }

    return this.props.children;
  }
}
