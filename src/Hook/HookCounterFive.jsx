import React,{useState, useEffect} from 'react'

function HookCounterFive() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState([''])
    useEffect(()=>{
        console.log('UseEffect is Updating...')
        document.title = `Click Count ${count} times`
    },[count])
  return (
    <div style={{textAlign:'center'}}>
        <input type="text" value={name} onChange={e => {setName(e.target.value)}} />
      <button onClick={()=>{setCount(count+1)}}>Click Count {count} times</button>
    </div>
  )
}

export default HookCounterFive
