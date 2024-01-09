import React from 'react'
import ChildComp3 from './ChildComp3'

const ChildComp2 = (props) => {
  return (
    <>
        <h3>ChildComp2</h3>
        <h4>Mesage in Child2 comp:{props.sendToChild2Comp}</h4>
        <ChildComp3 messsageToChildComp3={props.sendToChild2Comp}/>
    </>
  )
}

export default ChildComp2