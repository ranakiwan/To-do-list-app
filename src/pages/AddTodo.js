import React, { useRef, useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
  const { setTodos } = useContext(TodoContext);
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, inputRef.current.value]);
    inputRef.current.value = '';
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="Enter todo" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;