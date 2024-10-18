import React from 'react'

function Inline() {
    const stylecss = {
        fontSize: '75px',
        color : 'green'
    }
  return (
    <div>
        <h1 className='error'>Error</h1>
      <h1 style={stylecss}>Inline</h1>
    </div>
  )
}

export default Inline
