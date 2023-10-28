import { useState } from 'react';

const TodoItem = ({ todo, index, onDeleteTodo, onEditTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEditTodo(index, editedTodo);
    setIsEditing(false);
  };
  return (
    <>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <li key={index}>{todo}</li>
          <button onClick={() => onDeleteTodo(index)}>Delete</button>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </>
  );
};

export default TodoItem;
