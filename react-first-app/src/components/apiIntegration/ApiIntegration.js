import axios from "axios";
import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class ApiIntegration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    console.log(`Inside componentdidmount`);
    this.fetchUserDetails();    
  }
  fetchUserDetails = async () => {
    const userData = await axios.get("https://fakestoreapi.com/users");
    console.log(userData.data);
    this.setState({ user: userData.data });
  };
  render() {
    return (
      <>
        {/* <h1>ApiIntegration Called</h1>
        <div className="userData">
            <ul>
                {this.state.user.map((user) => 
                    <p>{user.username}-{user.password}</p>
                )}
            </ul>
        </div> */}
        <div className="container">
          <h1>API Integration Called</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone No.</th>
              </tr>
            </thead>
            <tbody>
            {this.state.user.map((user) => 
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name.firstname}</td>
                <td>{user.name.lastname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
                    // <p>{user.username}-{user.password}</p>
                )}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}
