import React from 'react'
import './myStyle.css';

function Stylesheet(props) {
    let className = props.premiry ? 'premiry' : '';
  return (
    <div>
      <h1 className={`${className} font-xl`} style={{textAlign:'center'}}>Style Sheet</h1>
    </div>
  )
}
export default Stylesheet
