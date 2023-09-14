import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { todoInput, todoType } from "../types/types";
import { addTodoFunction } from "./addTodoSlice";
import { editTodoFunction } from "./editTodoSlice";

export const dataSlice = createSlice({
  name: "data",
  initialState: localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data") as string) as todoType[]
    : [],
  reducers: {
    deleteTodo: (state) => {},
    completeTodo: (state) => {},
    addTodo: addTodoFunction,
    editTodo: editTodoFunction,
  },
});

export const { addTodo, editTodo, deleteTodo,  completeTodo} = dataSlice.actions;
export default dataSlice.reducer;
