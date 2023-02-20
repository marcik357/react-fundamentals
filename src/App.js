import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

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
      <form action="#">
        <MyInput type="text" placeholder='Post title' />
        <MyInput type="text" placeholder='Post description' />
        <MyButton disabled class="button">Create</MyButton>
      </form>
      <PostList posts={posts} title="Posts List 1"/>
    </div>
  );
}
 
export default App;