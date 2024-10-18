import React, { Component } from 'react'

 class From extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName: '',
         comments: '',
         topic: 'React'
      }
    //   this.handleChangeUserName = this.handleChangeUserName.bind(this)
    }
    handleChangeUserName = event => {
        this.setState({
            userName: event.target.value
        })
    }
    handleChangeComment = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleChangeTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`Your name is ${this.state.userName}. You are comment ${this.state.comments} and You will learn ${this.state.topic}`);
        event.preventDefault();
    }
  render() {
    return (
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="">User Name</label>
            <input type="text" value={this.state.userName} onChange={this.handleChangeUserName} /><br /><br />
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label htmlFor="">Comments</label>
                <textarea value={this.state.comments} onChange={this.handleChangeComment}></textarea>
            </div><br />
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label htmlFor="" style={{margin:'10px'}}>Topic</label>
                <select value={this.state.topic} onChange={this.handleChangeTopic}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Veu">Veu</option>
                </select>
            </div>
            <button type='submit'>Submit</button>

        </form>
      </div>
    )
  }
}

export default From
