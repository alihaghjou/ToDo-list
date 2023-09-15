import { createSlice } from "@reduxjs/toolkit";
import { todoType } from "../types/types";
import { addTodoFunction } from "./addTodoSlice";
import { editTodoFunction } from "./editTodoSlice";
import { completeItemFunction, deleteItemFunction } from "./otherActionsSlice";

export const dataSlice = createSlice({
  name: "data",
  initialState: localStorage.getItem("data")
    ? (JSON.parse(localStorage.getItem("data") as string) as todoType[])
    : [],
  reducers: {
    deleteTodo: deleteItemFunction,
    completeTodo: completeItemFunction,
    addTodo: addTodoFunction,
    editTodo: editTodoFunction,
  },
});

export const { addTodo, editTodo, deleteTodo, completeTodo } =
  dataSlice.actions;
export default dataSlice.reducer;
