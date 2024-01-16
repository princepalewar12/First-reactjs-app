import React, { useState } from "react";

const UncontrolledComp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameRef = React.createRef();
  const passwordRef = React.createRef();

  const handleSubmit = (e) => {
    alert(
      `UserName: ${userNameRef.current.value} password: ${passwordRef.current.value}`
      );
      e.preventDefault()
  };
  return (
    <>
      <h1> Login form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="five-columns">
            <label htmlFor="userName">
              <h3>User Name:-</h3>
            </label>
            <input
              type="text"
              value={userName}
              ref={userNameRef}
              placeholder="Enter user name"
            />
          </div>
          <div className="five-columns">
            <label htmlFor="password">
              <h3>Password:-</h3>
            </label>
            <input
              type="password"
              value={password}
              ref={passwordRef}
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UncontrolledComp;
