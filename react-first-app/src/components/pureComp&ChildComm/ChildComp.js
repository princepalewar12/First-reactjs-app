import React, { Component } from 'react'

export default class ChildComp extends Component {

    constructor(props){
        super(props)
        this.state = {
            message: 'Welcome to Reactjs'
        }
    }
    sendMessage=(message)=>{
        this.props.sendDataToParentComp(this.state.message)
    }
  render() {
    return (
      <>
        <h3>ChildComp</h3>
        <button onClick={this.sendMessage}>Send Messge to Parent Comp</button>
      </>
    )
  }
}
