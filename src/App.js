import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddTodo from './pages/AddTodo';
import { TodoProvider } from './TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-todo">Add Todo</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-todo" element={<AddTodo />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
};

export default App;