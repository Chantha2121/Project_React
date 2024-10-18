import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetcing() {
    const [post,setPost ] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(err => console.log(err))
    },[])
  return (
    <div>
      <ul>
      {
      post.map(posts => <li key={posts.id}>{posts.title}</li>)
      }
      </ul>
    </div>
  )
}

export default DataFetcing
