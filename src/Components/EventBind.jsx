import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello world!'
      }
    //   this.clickHandler = this.clickHandler.bind(this);
    }
    // clickHandler(){
    //     this.setState({
    //         message: 'Good bye!'
    //     })
    // }
    clickHandler = ()=>{
        this.setState({
            message: 'Good bye!'
        });
    }
  render() {
    return (
      <div>
        <h1 style={{textAlign:'center'}}>{this.state.message}</h1>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
        {/* <button onClick={()=> this.clickHandler()}>Click Me</button> */}
        <button onClick={this.clickHandler}>Click Me</button>
        </div>
      </div>
    )
  }
}

export default EventBind
