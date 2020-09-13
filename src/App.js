import React from 'react';
import './App.css';

import Posts from './components/Posts'
import PostForm from './components/PostForm'

const App = () => {
  return (
    <div className="App">
      <PostForm />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
