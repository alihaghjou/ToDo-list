import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { todoInput, todoType } from "../types/types";
import { addTodoFunction } from "./addTodo";
import { z } from "zod";

const titleSchema = z
  .string({
    required_error: "Required",
  })
  .max(50)
  .min(1);

export const dataSlice = createSlice({
  name: "data",
  initialState: localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data") as string)
    : [],
  reducers: {
    deleteTodo: (state) => {},
    completeTodo: (state) => {},
    addTodo: addTodoFunction,
    editTodo: (state, action: PayloadAction<{EachTodo: todoType, editTitleValue: string, editDescriptionValue:string}>) => {
      const tempData = [...state];
      const index = tempData.indexOf(action.payload.EachTodo);
      const Set: todoType = {
        title: titleSchema.parse(action.payload.editTitleValue),
        description: z.string().parse(action.payload.editDescriptionValue),
        date: action.payload.EachTodo.date,
        id: action.payload.EachTodo.id,
        completed: action.payload.EachTodo.completed,
      };
      tempData.splice(index, 1, Set);
      state = tempData
    },
  },
});

export const { addTodo, editTodo, deleteTodo,  completeTodo} = dataSlice.actions;
export default dataSlice.reducer;
