import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error('Application Issue');
    }

    return (
      <>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          <h1>Clicked: {this.state.counter}</h1>
        </button>
      </>
    );
  }
}