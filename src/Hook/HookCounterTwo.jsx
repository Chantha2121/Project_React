import React,{useState} from 'react'

function HookCounterTwo() {
    const initializeCount = 0;
    const [count, setCount] = useState(0);
    const IncreamentFive = () =>{
        for(let i=0 ; i<5 ; i++){
            setCount((prev)=> prev+1)
        }
    }
  return (
    <div style={{textAlign:'center'}}>
        <div className="">
            <h1>Click Count {count}</h1>
        </div>
      <button  className=' bg-success rounded-2 text-info'
      onClick={()=>{setCount(initializeCount)}}>Reset</button>
      <button  className=' bg-success rounded-2 text-info'
      onClick={()=>{setCount((prev)=> prev+1)}}>Decreament</button>
      <button  className=' bg-success rounded-2 text-info'
      onClick={()=>{setCount((prev)=> prev-1)}}>Increament</button>
      <button  className=' bg-success rounded-2 text-info'
      onClick={IncreamentFive}>Increament 5</button>
    </div>
  )
}

export default HookCounterTwo
