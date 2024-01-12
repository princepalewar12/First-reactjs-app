import React, { useState } from 'react'
import MemoComponent from './MemoComponent'

const MemoParent = () => {
    const[count, setCount] = useState(0)

  return (
    <>
        <h1>MemoParent</h1>
        <h4>Count:{count}</h4>
        <button onClick={()=>{setCount(count+1)}}>Count Increment</button>

        <MemoComponent name={'Prince'}/>
    </>
  )
}

export default MemoParent