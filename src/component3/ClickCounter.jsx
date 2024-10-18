import React, { Component } from 'react'
import UpdateComponent from './withcounter'

class ClickCounter extends Component {
  render() {
    const {count, handleChick} = this.props
    return (
      <div style={{textAlign:'center'}}>
        <button onClick={handleChick}>Click count {count}</button>
      </div>
    )
  }
}

export default UpdateComponent(ClickCounter)
