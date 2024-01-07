import React, { useState } from 'react'

const FunctionChild = (props) => {

    const{receivedFromChild} =props

    const[childMessage] = useState('I am proud of myself')

    const sendMessage=()=>{
        receivedFromChild(childMessage)
    }
  return (
    <>
        <h3>Function Child</h3>
        <button onClick={sendMessage}>Send message to Parent Comp</button>
    </>
  )
}

export default FunctionChild