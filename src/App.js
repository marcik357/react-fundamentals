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

  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()

    setPosts([...posts, {...post, id: Date.now()}])
    setPost({ title: '', body: '' })
  }

  return (
    <div className="App">
      <form action="#">
        {/* Managed component */}
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder='Post title'
        />
        <MyInput
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
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