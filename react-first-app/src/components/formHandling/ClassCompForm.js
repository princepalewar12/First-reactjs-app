import React, { Component } from 'react';

class ClassCompForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.inputRef= React.createRef()
  }
  
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here using this.state.email and this.state.password
    // For example, you can send a request to a server for authentication
  };
componentDidMount(){
    // this.inputRef.current.focus()
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}
            ref={this.emailRef}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ClassCompForm;
