import { PayloadAction } from "@reduxjs/toolkit";
import { todoType } from "../types/types";

export const deleteItemFunction = (
  state: todoType[],
  action: PayloadAction<todoType>
) => {
  const deleteItem = state.filter((item) => item.id !== action.payload.id);
  state.length = 0;
  deleteItem.forEach((item) => state.push(item));
  localStorage.setItem("data", JSON.stringify(deleteItem));
};
export const completeItemFunction = (
  state: todoType[],
  action: PayloadAction<todoType>
) => {
  const place = state.findIndex((item) => item.id === action.payload.id);
  state[place].completed = true;
  localStorage.setItem("data", JSON.stringify(state));
};
