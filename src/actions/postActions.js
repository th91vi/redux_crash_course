import { FETCH_POSTS, NEW_POST } from './types'

// export const fetchPosts = () => {
//   return function(dispatch) {
//     const res = await fetch('http://jsonplaceholder.typicode.com/posts');
//     const posts = await res.json();

//     dispatch({
//       type: FETCH_POSTS,
//       payload: posts
//     })
//   }
// }

export const fetchPosts = () => async dispatch => {
  try {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    dispatch({
      type: FETCH_POSTS,
      payload: posts
    })
  } catch (err) {
    console.error(err)
  }
}

export const createPost = (postData) => async dispatch => {
  try {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })

    const post = await res.json()

    dispatch({
      type: NEW_POST,
      payload: post
    })
  } catch (err) {
    console.error(err)
  }
}