import { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
  const [task, setTask] = useState('');

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button
        onClick={() => {
          setTask('');
          onAddTodo(task);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTodo;
