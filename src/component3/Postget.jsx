import React, { Component } from 'react'
import axios from 'axios'
class Postget extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[]
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response =>{
        console.log(response);
        this.setState({posts: response.data});
      })
      .catch(error =>{
        console.log(error);
      })
  }
  
  render() {
    const { posts} = this.state;
    return (
      <div style={{textAlign:'center',fontSize:'20px'}}>
        list of posts
        {
        posts.length ? 
        posts.map(posts => <div key={posts.id}>{posts.title}</div>): null
        }
      </div>
    )
  }
}

export default Postget
