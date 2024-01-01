import axios from "axios";
import React, { useEffect, useState } from "react";

const UserCommentsUseEffect = (props) => {
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
      setComments({ Comments: userComments.data });
    };
    getCommentData();
  }, []);

  return (
    <>
      <div>UserCommentsUseEffect</div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comments) => {
            <div>
              <tr key={comments.postId}>
                <td>{comments.id}</td>
                <td>{comments.name}</td>
                <td>{comments.email}</td>
                <td>{comments.body}</td>
              </tr>
            </div>;
          })}
        </tbody>
      </table>
    </>
  );
};

export default UserCommentsUseEffect;
