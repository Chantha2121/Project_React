import React,{useState} from 'react'
import HookCountSix from './HookCountSix'
function MouseContainer() {
    const [display, setDiplay] = useState(true)
  return (
    <div style={{textAlign:'center'}}>
      <button onClick={()=>setDiplay(!display)} >Toggle Diplay</button>
      {display && <HookCountSix/>}
    </div>
  )
}

export default MouseContainer
