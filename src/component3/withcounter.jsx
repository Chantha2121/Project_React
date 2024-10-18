import React from "react";
const UpdateComponent = OriginalComponent =>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          handleChick = ()=> {
              this.setState(prev=>({
                  count: prev.count + 1
              }))
          }
        render(){
            return (<OriginalComponent 
            count={this.state.count} 
            handleClick={this.handleChick}/>)
        }
    }
    return NewComponent
}
export default UpdateComponent