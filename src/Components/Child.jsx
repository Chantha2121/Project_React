import React, { Component } from 'react'

class Child extends Component {
    componentWillUnmount(){
        // alert('The component named header is about to be unmounted')
    }
  render() {
    return (
      <div>
        <h1 style={{textAlign:'center'}}>Hello Baby</h1>
      </div>
    )
  }
}

export default Child
