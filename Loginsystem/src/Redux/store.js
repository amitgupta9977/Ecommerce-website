import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import todosReducer from "./TodoSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
});

export default store;
