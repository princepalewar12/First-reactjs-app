import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComp extends Component {

    constructor(props){
        super(props)
        this.state={
            messegeFromChildComp:" "
        }
    }

    handleDataFromChild=(message)=>{
        this.setState({messegeFromChildComp: message})
    }
  render() {
    return (
      <>
        <h2>Parent Component</h2>
        <h3>Message From Child Comp: {this.state.messegeFromChildComp}</h3>

        <ChildComp sendDataToParentComp={this.handleDataFromChild}/>        
      </>
    )
  }
}
