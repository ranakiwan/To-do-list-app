import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../TodoContext';

const Home = () => {
  const { todos } = useContext(TodoContext);

  useEffect(() => {
    console.log('Todos:', todos);
  }, [todos]);

  return (
    <div className="container">
      <h1>Welcome to your ToDo List by Rana Kiwan</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;