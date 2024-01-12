import React from 'react'

const MemoComponent = ({name}) => {
  return (
      <>
        <h1>MemoComponent</h1>
        <h3>Name Is: {name}</h3>
    </>
  )
}

// export default MemoComponent
export default React.memo(MemoComponent)