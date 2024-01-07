import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const UserCommentsUseEffect = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getCommentData = async () => {
      let userComments;
      try {
        userComments = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
      } catch (error) {
        console.log(error);
      }
      console.log(userComments.data);
      setComments(userComments.data );
    };
    getCommentData();
  }, []);

  return (
    <>
      <div className="container">
          <h1>Calling API using useEffect Hook</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
              
              </tr>
            </thead>
            <tbody>
            {comments.map((userComments) => 
              <tr key={userComments.id}>
                <td>{userComments.name}</td>
                <td>{userComments.email}</td>
                <td>{userComments.body}</td>
      
              </tr>
                    // <p>{user.username}-{user.password}</p>
                )}
            </tbody>
          </Table>
        </div>    </>
  );
};

export default UserCommentsUseEffect;
