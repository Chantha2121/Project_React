import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('Pure component');
    return (
      <div style={{textAlign:'center'}}>
        Pure component {this.props.name}
      </div>
    )
  }
}

export default PureComp
