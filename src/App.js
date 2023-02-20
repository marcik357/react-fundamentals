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
  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()

    const newPost = {
      id: Date.now(),
      title,
      body,
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
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
        <MyInput
          type="text"
          placeholder='Post description'
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <MyButton onClick={addNewPost}>Create</MyButton>
      </form>
      <PostList posts={posts} title="Posts List 1" />
    </div>
  );
}

export default App;