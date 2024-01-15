import React from 'react'
import UseMemoComp from './UseMemoComp'

const ParentCompUseMemo = () => {
  return (
    <div>
        <h1>ParentCompUseMemo</h1>
        <UseMemoComp number={10} number2={20}/>
    </div>
  )
}

export default ParentCompUseMemo