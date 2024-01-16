import React, { useState } from "react";

const ControlledComp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit=(e)=>{
    alert(`user name: ${userName}, Password: ${password}`)
    e.preventDefault()
  }
  return (
    <>
      <h1> Login form</h1>
      <form>
        <div className="row">
          <div className="five-columns">
            <label htmlFor="userName">
              <h3>User Name:-</h3>
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
        </div>
          <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default ControlledComp;
