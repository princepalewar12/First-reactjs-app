import React, { useState }from "react";
import CompChild1 from "./CompChild1";
//create a new context 
export const myContext = React.createContext()
const ParentUseContext = () => {
  const [message, setMessage] = useState("Let's have fun!")
  const words = "I am a good person"
  return (
    <div>
      <h1>ParentUseContext</h1>
      <h3>Message in parentComp:- {message}</h3>
      <myContext.Provider value={{message,words}}>
      <CompChild1/>

      </myContext.Provider>
    </div>
  );
};

export default ParentUseContext;
