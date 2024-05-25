import React from 'react';
import TodoList from './components/TodoList';
import User from './components/User';
import PostList from './components/PostList';
import AddTodo from './components/AddTodo';
import AddPost from './components/AddPost';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />

      <h2>User Registration</h2>
      <User />

      <h2>Posts</h2>
      <AddPost />
      <PostList />
    </div>
  );
}

export default App;
