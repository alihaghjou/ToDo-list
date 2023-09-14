import { PayloadAction } from "@reduxjs/toolkit";
import { todoInput, todoType } from "../types/types";

export const addTodoFunction = (state: todoType[], action: PayloadAction<todoInput>) => {
    if (!state?.length) {
      state.push(
        {
          id: 1,
          title: action.payload.Todo,
          completed: false,
          date: new Date(),
          description: action.payload.description,
        },
      );
      return;
    }
    state.map((item) => {
      if (item.title.toLowerCase() === action.payload.Todo.toLowerCase()) {
        throw new Error("Enter New Title");
      }
    });
    const copy = [...state];
    state.push({
      id: state[0].id + 1,
      title: action.payload.Todo,
      completed: false,
      date: new Date(),
      description: action.payload.description,
    });
  }