import React, { useState } from 'react'
import FunctionChild from './FunctionChild'

const FunctionParent = () => {

    const [message, setMessage] = useState('')

    const handleDataFromChild =(childMessage)=>{
        setMessage(childMessage)
    }

  return (
    <>
        <h3>FunctionParent</h3>
        <h4>Message from Child Comp:{message}</h4>

        <FunctionChild receivedFromChild={handleDataFromChild}/>   
    </>
  )
}

export default FunctionParent