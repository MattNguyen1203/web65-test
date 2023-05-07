import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./todoListSlice";
const rootReducer = {
  todoList: todoListReducer,
};
export const store = configureStore({
  reducer: rootReducer,
});
