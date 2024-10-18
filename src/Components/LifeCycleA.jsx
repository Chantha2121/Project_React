import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';
class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Chantha A'
      }
      console.log('Lifecycle A: constructor');
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle A: getDerivedStateFromProps');
        return null
    }
    componentDidMount(){
        console.log('Lifecycle A: componentDidMount');
    }
    shouldComponentUpdate(){
        console.log('Lifecycle A: shouldComponentUpdate');
      return true
    }
    getSnapshotBeforeUpdate(){
      console.log('Lifecycle A: getSnapshotBeforeUpdate');
      return null
    }
    componentDidUpdate(){
      console.log('Lifecycle A: componentDidUpdate');
    }
    changeState = () => {
      this.setState({
        name: 'snapshot'
      })
    }
  render() {
    console.log('Lifecycle A: render');
    return (
      <div>
        <h1 style={{textAlign:'center'}}>{this.state.name}</h1>
        <div style={{display: 'flex',alignItems:'center',justifyContent:'center'}}>
          <button onClick={this.changeState}>change state</button>
        </div>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA
