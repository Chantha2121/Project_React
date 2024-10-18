import React from 'react'

function ChildrenFunction(props) {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <button onClick={()=>props.parentHandler('click')}>Click Me</button>
    </div>
  )
}

export default ChildrenFunction
