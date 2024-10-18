import React, { Component } from 'react'

export class Count extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    // increment(){
    //     this.setState((prevState)=>({
    //         count: prevState.count + 1
    //     }))
    // }
    increment(){
        this.setState({
            count: this.state.count+1
        })
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    
  render() {
    return (
      <div>
        <h1 style={{textAlign:'center'}}>Count : {this.state.count}</h1>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <button onClick={()=> this.increment()}>Increment</button>
        </div>
      </div>
    )
  }
}

export default Count
