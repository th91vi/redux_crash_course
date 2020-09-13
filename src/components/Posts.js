import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

const Posts = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts()
  }, [])
  console.log(posts)
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

const mapStateToProps = (state) => ({
  posts: state.posts.items
})

// export default Posts
export default connect(mapStateToProps, { fetchPosts })(Posts)
