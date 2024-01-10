import React from "react";
import { Component } from "react";
import ClassChild3 from "./ClassChild3";
// import MyMessage from "./createContext";

class ClassChild2 extends Component{
    render(){
        // let message = this.context
        return(
            <>
                <h1>Class Child2</h1>
                <ClassChild3/>
            </>
        )
    }
}
// ClassChild2.contextType = MyMessage;
export default ClassChild2