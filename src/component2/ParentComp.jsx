import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import Memocomp from './Memocomp'

 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Chantha'
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Chantha'
            })
        }, 2000);
    }
  render() {
    console.log('****************************** Parent Component ****************************');
    return (
      <div>
        <Memocomp name={this.state.name}/>
        <div style={{textAlign:'center'}}>Parent Component</div>
        {/* <RegComp name={this.state.name}/> */}
        {/* <PureComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp
