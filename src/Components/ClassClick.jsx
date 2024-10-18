import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log('Clicked the button');
    }
  render() {
    return (
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
       <br /><br /> <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick
