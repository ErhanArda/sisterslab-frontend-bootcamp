import TodoItem from './TodoItem';

const TodoList = ({ todos, onDeleteTodo, onEditTodo }) => {
  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
