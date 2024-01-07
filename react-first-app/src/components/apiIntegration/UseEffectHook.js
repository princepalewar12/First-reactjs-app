import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const UseEffectHook = () => {
  // After React version 16.8 in functional comp we use hooks to replace class comp
  // (class comp - state) - (func comp -useState)
  // (class comp - componentDIdMount) - (function - useEffect)

  //   syntax of useEffect hook
  // useEffect(()=>{

  //     callback function
  // },[dependency array]);

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Anand");

  // 1. No dependency array to useEffect
  //   useEffect(() => {
  //     console.log("Use Effect Hook call on every update/render");
  //   });

  // useEffect(() => {
  //     console.log("Use Effect Hook call when api called once");
  //   },[]);
  // 3. pass value to dependency
  useEffect(() => {
    console.log("Use Effect Hook call when state get updated");
  }, [name]);
  const increamentCount = () => {
    setCount(count + 1);
  };
  const nameChange = () => {
    setName("Prince");
  };
  return (
    <>
      <h2>Fuctional Component useEffectHook</h2>
      <h1>Count: {count}</h1>
      <Button onClick={increamentCount} variant="primary">
        Count ++
      </Button>
      <h1>Name: {name}</h1>
      <Button onClick={nameChange} variant="primary">
        ClickToChangeName
      </Button>
      <div></div>
    </>
  );
};

export default UseEffectHook;
