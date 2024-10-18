import React, { Component } from 'react'
export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggingIn: false
      }
    }
    
  render() {
    // let message
    // if(this.state.isLoggingIn){
    //     message = <div style={{textAlign:'center',fontSize:'20px'}}>Hello chantha</div>
    // }
    // else{
    //     message = <div style={{textAlign:'center',fontSize:'20px'}}>Hello fuck you</div>
    // }


    // if(this.state.isLoggingIn){
    //     return(<div style={{textAlign:'center',fontSize:'20px'}}>
    //         Welcome chantha
    //     </div>)
    // }
    // else{
    //     return(
    //         <div style={{textAlign:'center',fontSize:'20px'}}>
    //             Welcome fuck you
    //         </div>
    //     )
    // }
    return this.state.isLoggingIn && (<div>Hello chantha</div>)
    // (
    //   <div>
    //     {message}
    //   </div>
        // this.state.isLoggingIn ? (<div style={{textAlign:'center',fontSize:'20px'}}>
        //     Hello chantha
        // </div>) : (<div style={{textAlign:'center',fontSize:'20px'}}>Hello fuck you</div>)
        
    // )
  }
}

export default UserGreeting
