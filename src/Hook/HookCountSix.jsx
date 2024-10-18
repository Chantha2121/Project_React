import React,{useState,useEffect} from 'react'

function HookCountSix() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePosition = (e)=>{
        console.log('Event mouse')
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(()=>{
        console.log('Effect is created');
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
          console.log("Component unmounting code")
          window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
  return (
    <div style={{textAlign:'center'}}>
        <h3>X - {x} and Y - {y}</h3>
    </div>
  )
}

export default HookCountSix
