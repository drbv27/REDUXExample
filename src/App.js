import React from 'react';
import './App.css';

import PostForm from './components/postForm'
import AllPost from './components/allPost'

function App() {
  return (
    <div className="App">
     <div className='navbar'>
       <h2 className="center">Post it</h2>
     </div>
      <PostForm />
      <AllPost />
    </div>
  )
}

export default App;
