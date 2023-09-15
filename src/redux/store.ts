import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import openSlice from "./openSlice";

export const store = configureStore({
  reducer: {
    todo: dataSlice,
    open: openSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
