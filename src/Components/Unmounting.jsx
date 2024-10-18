import React, { Component } from 'react'
import Child from './Child'

class Unmounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         show: true
      }
    }
    delHeader = ()=>{
        this.setState({show: false})
    }
  render() {
    let master
    if (this.state.show){
        master = <Child/>
    }
    return (
      <div>
        <div>{master}</div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
            <button onClick={this.delHeader}>Delete Header</button></div>
      </div>
    )
  }
}

export default Unmounting
