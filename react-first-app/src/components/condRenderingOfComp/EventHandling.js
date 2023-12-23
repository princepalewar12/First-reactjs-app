import { Component } from "react";
import { Button } from "react-bootstrap";

class EventHandling extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         userName: "Anand"
      }
    }
    // changeName(){
    //     console.log(this.state.userName);
    //     console.log("Inside name change");
    // }
    changeName=()=>{
        console.log(this.state.userName);
        console.log("Inside name change");
    }

    render(){
        return(
            <>
                <h1>Inside Event Handling</h1>
                <h3>User Name:{this.state.userName}</h3>
                {/* <Button variant='primary' onClick={this.changeName.bind(this)}>CLICK!</Button> */}

                {/* EventHanling using arrow function */}
                <Button variant='primary' onClick={this.changeName.bind(this)}>CLICK!</Button>
                
            </>
        )
    }
}
export default  EventHandling;