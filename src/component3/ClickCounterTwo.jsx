import React, { Component } from 'react'
class ClickCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increament = () => {
        this.setState(prev =>{
            return {count: prev.count + 1}})
    }
  render() {
    const {count} = this.state
    return (
      <div style={{textAlign:'center'}}>
        <button onClick={this.increament}>Click count {count}</button>
      </div>
    )
  }
}

export default ClickCounterTwo
