import React, { useState } from 'react';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript", body: "Description" },
    { id: 3, title: "JavaScript", body: "Description" },
    { id: 4, title: "JavaScript", body: "Description" },
    { id: 5, title: "JavaScript", body: "Description" },
  ])

  return ( 
    <div className="App">
      <PostList posts={posts} title="Posts List 1"/>
    </div>
  );
}

export default App;