import React, { Component } from 'react'

class RefComp extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef()
        this.cbref = null
        this.setCbref = element =>{
          this.cbref = element;
        }
    }
    componentDidMount(){
      if(this.cbref){
        this.cbref.focus();
      }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    handleClick = () =>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <form style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <input type="text" ref={this.inputRef}/>
            <input type="text" ref={this.setCbref} />
            <button onClick={this.handleClick}>Click</button>
        </form>
      </div>
    )
  }
}

export default RefComp
