import React, { useContext } from 'react'
import { myContext } from './ParentUseContext'

const CompChild4 = () => {
    const {words, message} = useContext(myContext)
  return (
    <div>
        <h1>CompChild4</h1>
        <h3>Message from child4:{words}</h3>
        <h3>Message from child4:{message}</h3>
    </div>
  )
}

export default CompChild4