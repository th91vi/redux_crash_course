import React, { useState } from 'react'

const PostForm = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault();

    const post = {
      title,
      body
    }

    const res = await fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })

    const data = await res.json()

    console.log(data)
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

export default PostForm
