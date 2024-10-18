import React, { Component } from 'react'

 class Didmount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text: 'domount'
      }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({text: 'didmount'})
        }, 1000);
    }
  render() {
    return (
      <div>
        <h1 style={{textAlign:'center'}}>{this.state.text}</h1>
      </div>
    )
  }
}

export default Didmount
