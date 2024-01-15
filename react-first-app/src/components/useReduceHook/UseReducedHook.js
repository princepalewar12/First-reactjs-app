import React, { useReducer } from 'react'

const useReducedHook = () => {

    const reducer=(count, action)=>{
        switch (action) {
            case "add":
                return count+1
            case "sub":
                return count-1
                case "reset":
                return 0
            default:
                break;
        }
    }
    const [count, dispatch] = useReducer(reducer, 0)
  return (
    <>
        <h1>useReducedHook</h1>
        <h1>Count:{count}</h1>
        <button onClick={()=>dispatch('add')}>Add</button>
        <button onClick={()=>dispatch('sub')}>Sub</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
    </>
  )
}

export default useReducedHook