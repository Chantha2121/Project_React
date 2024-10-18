import React, { Component } from 'react'
class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Chantha B'
      }
      console.log('Lifecycle B: constructor');
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle B: getDerivedStateFromProps');
        return null
    }
    componentDidMount(){
        console.log('Lifecycle B: componentDidMount');
    }
    shouldComponentUpdate(){
      console.log('Lifecycle B: shouldComponentUpdate');
    return true
    }
    getSnapshotBeforeUpdate(){
      console.log('Lifecycle B: getSnapshotBeforeUpdate');
      return null
    }
    componentDidUpdate(){
      console.log('Lifecycle B: componentDidUpdate');
    }
    
  render() {
    console.log('Lifecycle B: render');
    return (
      <div>
        <h1 style={{textAlign:'center'}}>{this.state.name}</h1>
        
      </div>
    )
  }
}

export default LifeCycleB
