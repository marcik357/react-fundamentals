import React, { useState, useRef } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "11", body: "11" },
    { id: 2, title: "22", body: "22" },
    { id: 3, title: "44", body: "33" },
    { id: 4, title: "43", body: "44" },
    { id: 5, title: "522", body: "55" },
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sorting"
          options={[
            { value: 'title', name: 'Name' },
            { value: 'body', name: 'Description' },
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title="Posts List 1" />
        : <h1 style={{ textAlign: 'center' }}>
          There are no posts!
        </h1>
      }
    </div>
  );
}

export default App;