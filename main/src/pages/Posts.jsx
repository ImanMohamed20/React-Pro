import React, { useState } from "react"
import { useEffect } from "react"
export const Posts =()=> {
    const [posts ,setPosts] = useState([]);
    useEffect(() => {
      fetch('https://jsonlaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPosts(json))

    },[])

  return (
    <main className="posts">
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Posts</h1>
            </div>
            
          </div>
        </div>
      </div>
      <div className="container content">
        
            <div className="row">
            {posts.map(post => {
              return (
                <div className="col-sm-6" key ={post.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.body}</p>
                    </div>
                  </div>
                </div>
              )
            })}
            </div>
      
      </div>
    </main>
  )

}
export default Posts;