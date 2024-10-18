import React,{useState} from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([])
    const addItems = ()=>{
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
  return (
    <div className=' text-center'>
        <button style={{textAlign:"center"}} className=' btn btn-primary' onClick={addItems}>ADD</button>
        {
            items.map(item =>(
                <li key={item.id} style={{textAlign:'center'}} className=' mt-2'>{item.value}</li>
            ))
        }
    </div>
  )
}

export default HookCounterFour
