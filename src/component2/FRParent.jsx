import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParent extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef()
    }
    handleFocus = () =>{
        this.inputRef.current.focus()
    }
    handlealert = () =>{
        alert(`Hello ${this.inputRef.current.value}`);
    }
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <FRInput ref={this.inputRef}/>
        <button onClick={this.handleFocus}>On Focus</button>
        <button onClick={this.handlealert}>Submit</button>
      </div>
    )
  }
}

export default FRParent
