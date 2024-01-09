import React, { useState } from "react";
import ChildComp1 from "./ChildComp1";

const ParentCompDrilling = () => {

    const[message, setMessage] = useState('Welcome to codeMind Technology')
  return (
    <>
      <h1>ParentCompDrilling</h1>
      <h1>Message:{message}</h1>
      <ChildComp1 sendMessage={message}/>
    </>
  );
};

export default ParentCompDrilling;
