import React, { Component } from 'react'

class HoverCounterTwo extends Component {
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
      <div>
        <h1 style={{textAlign:'center'}} onMouseOver={this.increament}>Hover Counter {count}</h1>
      </div>
    )
  }
}

export default HoverCounterTwo
