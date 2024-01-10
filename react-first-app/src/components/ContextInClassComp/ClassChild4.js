import React from "react";
import { Component } from "react";
import myMessage from "./createContext";

class ClassChild4 extends Component{
    render(){
        let message = this.context
        console.log(message);
        return(
            <>
                <h1>Class Child4</h1>
                <h3>Message From ParentComp:{message}</h3>
            </>
        )
    }
}
ClassChild4.contextType = myMessage;
export default ClassChild4