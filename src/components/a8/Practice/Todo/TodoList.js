import TodoItem from "./TodoItem";
import todos from "./todos";
const TodoList = () => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return <TodoItem todo={todo} key={index} />;
      })}
    </ul>
  );
};
export default TodoList;
