import React, { useState } from 'react';

const Todos = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodos = () => {
    setTodos([...todos, task]);
    setTask('');
  };

  return (
    <div>
      <h1>todo list</h1>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button onClick={addTodos}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
