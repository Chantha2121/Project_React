import React, { Component } from 'react'

class HoverTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         num:0
      }
    }
    incrementCounter = ()=>{
        this.setState(prev => {
            return {num: prev.num + 1}
        })
    }
  render() {
    const x  = this.state
    return (
      <div>
        <h1 onMouseOver={this.incrementCounter}>Hover Counter {x}</h1>
      </div>
    )
  }
}

export default HoverTwo
