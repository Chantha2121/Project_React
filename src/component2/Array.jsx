import React from 'react'
const items = ['pizza', 'banana', 'C#','JavaScript','HTML','CSS']
function Array() {
  return (
    <div>
      {
        items.map((item) =>(
          <h1>{item}</h1>
        ))
      }
    </div>
  )
}

export default Array
