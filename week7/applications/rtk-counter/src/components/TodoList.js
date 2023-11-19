import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAsync, fetchTodos } from '@/store/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (!todoText.trim()) return;
    dispatch(addTodoAsync({ title: todoText }));
    setTodoText('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add New Todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Ekle</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
