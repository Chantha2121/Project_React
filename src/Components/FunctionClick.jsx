import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked');
    }
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
