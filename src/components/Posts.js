import React, { useState, useEffect } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await res.json()

    console.log(data)
    setPosts(data)
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts
