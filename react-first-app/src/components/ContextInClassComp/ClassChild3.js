import { Component } from "react";
import ClassChild4 from "./ClassChild4";

class ClassChild3 extends Component{
    render(){
        return(
            <>
                <h1>Class Child3</h1>
                <ClassChild4/>
            </>
        )
    }
}
export default ClassChild3