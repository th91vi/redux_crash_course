import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

const PostForm = ({ createPost }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    const post = {
      title,
      body
    }

    createPost(post)
  }

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">Title: </label>
          <br />
          <input type='text' name="title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <br />
        <div>
          <label htmlFor="body">Body: </label>
          <br />
          <textarea type='text' name='body' value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default connect(null, { createPost })(PostForm)
