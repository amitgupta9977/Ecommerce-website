import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.text = text;
      }
    },
  },
});

// Simulate async API calls with setTimeout
export const addTodoAsync = (todo) => (dispatch) => {
  setTimeout(() => {
    dispatch(addTodo(todo));
  }, 1000);
};

export const updateTodoAsync = (id, text) => (dispatch) => {
  setTimeout(() => {
    dispatch(updateTodo({ id, text }));
  }, 1000);
};

export const { addTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;
