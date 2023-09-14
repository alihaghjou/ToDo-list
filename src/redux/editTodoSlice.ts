import { PayloadAction } from "@reduxjs/toolkit";
import { z } from "zod";
import { todoType } from "../types/types";

const titleSchema = z
  .string({
    required_error: "Required",
  })
  .max(50)
  .min(1);

export const editTodoFunction = (
  state: todoType[],
  action: PayloadAction<{
    EachTodo: todoType;
    editTitleValue: string;
    editDescriptionValue: string;
  }>
) => {
  for (var i in state) {
    if (state[i].title == action.payload.EachTodo.title) {
      (state[i].title = titleSchema.parse(action.payload.editTitleValue)),
        (state[i].description = z
          .string()
          .parse(action.payload.editDescriptionValue));
      break;
    }
  }
};
