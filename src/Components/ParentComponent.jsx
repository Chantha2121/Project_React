import React, { Component } from 'react'
import ChildrenFunction from './ChildrenFunction'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentMessage: 'Parent'
      }
      this.greeting = this.greeting.bind(this);
    }
    greeting(childName){
      alert(`Hello ${this.state.parentMessage} from ${childName}`)
    }
  render() {
    return (
      <div>
        <ChildrenFunction parentHandler = {this.greeting}/>
      </div>
    )
  }
}

export default ParentComponent
