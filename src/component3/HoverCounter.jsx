import React, { Component } from 'react'
import UpdateComponent from './withcounter'

class HoverCounter extends Component {
  render() {
    const {count, handleChick } = this.props
    return (
      <div>
        <h1 onMouseOver={handleChick} style={{textAlign:'center'}}> Hover count {count}</h1>
      </div>
    )
  }
}

export default UpdateComponent(HoverCounter)
