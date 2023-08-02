import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../Redux/TodoSlice";
import "../App2.css";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [todoText, setTodoText] = useState("");

  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      dispatch(addTodo({ id: Date.now(), text: todoText }));
      setTodoText("");
    }
  };

  const handleUpdateTodo = (id, newText) => {
    dispatch(updateTodo({ id, text: newText }));
  };

  if (!isAuthenticated) {
    return (
      <div className="access-denied">
        Access denied. Please log in to view this page.
      </div>
    );
  }

  return (
    <div className="todo-container">
      <h2>Todos</h2>
      <div className="todo-item">
        <input
          className="todo-input"
          type="text"
          value={todoText}
          onChange={handleInputChange}
        />
        <button className="add-todo-btn" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            {todo.text}{" "}
            <button
              className="edit-todo-btn"
              onClick={() =>
                handleUpdateTodo(todo.id, prompt("Edit Todo", todo.text))
              }
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
