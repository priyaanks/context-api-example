import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export const allTodos = (state) => state.yourTodos.todos;

export default todoSlice.reducer;
