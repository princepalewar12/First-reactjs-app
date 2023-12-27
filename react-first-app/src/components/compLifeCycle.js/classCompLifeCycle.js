import React, { Component } from 'react'

 class ClassCompLifeCycle extends Component {
    //1. Initialization phase
    constructor(props){
        super(props)
        console.log("class Component constructor")

        this.state={
            name: "welcome to class component"
        }
    }

    // 2. Mounting phase(if want to show something before rendering)

    static getDerivedStateFromProps(props){
        console.log('Inside getDerivedStateFromProps');
        return null;
    }
    componentDidMount(){
        console.log('Inside componentDidMount');
    }
    updateName=()=>{
        this.setState({name:'welcome to react comp'})
    }
    shouldComponentUpdate(){
        console.log('Inside Should component update');
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('Inside getSnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate(){
        console.log(` Inside componentDidUpdate`);
        return null
    }
  render() {
    console.log('Inside render method');
    return (
      <>
        <h1>Class Component life cycle</h1>
        <h2>{this.state.name}: <button className="btn btn-primary" onClick={this.updateName} type="button">Update Message</button>
</h2>
      </>
    )
  }
//   3. updating phase //getDerivedStateFromProps()//shouldComponentUpdate()// render() getSnapShotForUpdate()

}
export default ClassCompLifeCycle;