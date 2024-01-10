import { Component } from "react";
import ClassChild2 from "./ClassChild2";


class ClassChild1 extends Component{
    render(){
        return(
            <>
                <h1>Class Child1</h1>
                <ClassChild2/>
            </>
        )
    }
}
export default ClassChild1