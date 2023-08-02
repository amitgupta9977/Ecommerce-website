let todos = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Build a Todo app", completed: true },
  { id: 3, text: "Write a blog post", completed: false },
];

const getAllTodos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todos);
    }, 500);
  });
};

const updateTodo = (id, updatedTodo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      todos = todos.map((todo) => (todo.id === id ? updatedTodo : todo));
      resolve(updatedTodo);
    }, 500);
  });
};

export { getAllTodos, updateTodo };
