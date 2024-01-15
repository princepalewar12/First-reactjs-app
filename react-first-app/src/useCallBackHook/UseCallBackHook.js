import React, { useCallback } from 'react'

const UseCallBackHook = () => {
    const handleClick = useCallback(
        ()=>{
            console.log(`Button Clicked`);
        },[]
    )
  return (
    <>
    <h1>UseCallBack hook</h1>
    <button onClick={handleClick}>Click</button>
    </>
  )
}

export default UseCallBackHook