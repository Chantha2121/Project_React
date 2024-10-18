import React, { Component } from 'react'

 class hover extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      incrementCount = ()=>{
          this.setState(prev => {
              return {count: prev.count + 1}
          })
      }
    render() {
      const count = this.state
      return (
        <div style={{textAlign:'center'}}>
          <button onMouseOver={this.incrementCount}>Hover Counter {count}</button>
        </div>
      )
    }
}

export default hover
