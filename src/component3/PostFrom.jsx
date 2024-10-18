import React, { Component } from 'react'
import axios from 'axios'
class PostFrom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }
    changeHandler = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = e=>{
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(response =>{
                console.log(response);
            })
            .catch(err=>{
                console.log(err);
            })
    }
  render() {
    const {userId, title,body} = this.state
    return (
      <div>
        <form action="" style={{textAlign:'center'}} onSubmit={this.handleSubmit}>
            <div className="">
                <input type="text" 
                name="userId" 
                value={userId}
                className=' mt-4'
                onChange={this.changeHandler}
                />
            </div>
            <div className="">
            <input type="text" 
                name="title" 
                value={title}
                className=' mt-4'
                onChange={this.changeHandler}
                />
            </div>
            <div className="">
            <input type="text" 
                name="body" 
                value={body}
                className=' mt-4'
                onChange={this.changeHandler}
                />
            </div>
            <div className="">
                <button type="submit" className=' bg-primary rounded-3 mt-4'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

export default PostFrom
