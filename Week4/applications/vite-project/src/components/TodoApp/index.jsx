import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (task) => {
    setTodos([...todos, task]);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleEditTodo = (index, newText) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return newText;
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <h1>todo list</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </div>
  );
};

export default Todos;
