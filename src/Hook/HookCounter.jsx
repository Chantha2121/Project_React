import React,{useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
  return (
    <div style={{textAlign:'center'}}>
      <button  className=' bg-success rounded-2 text-info'
      onClick={()=>{setCount(count+1)}}>Click count {count}</button>
    </div>
  )
}

export default HookCounter
