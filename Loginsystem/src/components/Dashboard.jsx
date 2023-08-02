import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../Redux/authSlice";
import { addTodoAsync, updateTodoAsync } from "../Redux/TodoSlice";
import Login from "./Login";
import { getAllTodos, updateTodo } from "../dummyAPI"; // Correct the path to dummyAPI

const Dashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    getAllTodos().then((data) => {
      dispatch({ type: "todos/setTodos", payload: data });
    });
  }, [dispatch]);

  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      const newTodo = { id: Date.now(), text: todoText, completed: false };
      dispatch(addTodoAsync(newTodo)); // Use async action to add a new todo
      setTodoText("");
    }
  };

  const handleUpdateTodo = (id, newText) => {
    const updatedTodo = {
      ...todos.find((todo) => todo.id === id),
      text: newText,
    };
    updateTodo(id, updatedTodo).then(() => {
      dispatch(updateTodoAsync(id, newText)); // Use async action to update the todo
    });
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
  };

  if (!isAuthenticated) {
    return (
      <div>
        <Login />
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Dashboard</h2>
      <div className="todo-input-container">
        <input
          type="text"
          value={todoText}
          onChange={handleInputChange}
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="add-button">
          Add Todo
        </button>
      </div>
      <h3>Todos</h3>
      <ul className="todos-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}{" "}
            <button
              onClick={() =>
                handleUpdateTodo(todo.id, prompt("Edit Todo", todo.text))
              }
              className="edit-button"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
