import React from 'react'

const FRInput = React.forwardRef((props,ref)=>{
    return(
        <div style={{textAlign:'center'}}>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default FRInput
