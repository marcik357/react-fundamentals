import React, { useState } from 'react';
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostItem from './components/PostItem';

function App() {
  // const [value, setValue] = useState('Text in input')

  return (
    <div className="App">
      <PostItem post={{ id: 1, title: "JavaScript", body: "Description" }} />
      <PostItem post={{ id: 2, title: "JavaScript", body: "Description" }} />
      <PostItem post={{ id: 3, title: "JavaScript", body: "Description" }} />
      <PostItem post={{ id: 4, title: "JavaScript", body: "Description" }} />
    </div>
  );
}

export default App;
