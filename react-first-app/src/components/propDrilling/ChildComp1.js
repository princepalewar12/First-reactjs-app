import React from "react";
import ChildComp2 from "./ChildComp2";

const ChildComp1 = (props) => {
  return (
    <>
      <h2>ChildComp1</h2>
      <h3>message:{props.sendMessage}</h3>
      <ChildComp2 sendToChild2Comp={props.sendMessage}/>
    </>
  );
};

export default ChildComp1;
