import React, { Component } from 'react'

class ErrorBoudary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    static getDerivedStateFromError(){
        return {hasError: true}
    }
  render() {
    if(this.state.hasError) {
        return <h1 style={{textAlign:'center'}}>Somethings went wrong!</h1>
    }
    return this.props.children
  }
}

export default ErrorBoudary
