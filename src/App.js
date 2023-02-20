import React, { useState, useRef } from 'react';
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

  const [title, setTitle] = useState('')
  const bodyInputRef = useRef()

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title);
    console.log(bodyInputRef.current.value);
  }

  return (
    <div className="App">
      <form action="#">
        {/* Managed component */}
        <MyInput
          type="text"
          placeholder='Post title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        {/* Unmanaged component */}
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder='Post description'
        />
        <MyButton onClick={addNewPost}>Create</MyButton>
      </form>
      <PostList posts={posts} title="Posts List 1" />
    </div>
  );
}

export default App;