import React from 'react'

function Memocomp({name}) {
    console.log('Memo Component');
  return (
    <div style={{textAlign:'center'}}>
      {name}
    </div>
  )
}

export default React.memo(Memocomp)
