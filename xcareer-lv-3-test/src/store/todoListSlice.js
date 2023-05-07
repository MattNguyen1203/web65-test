import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "productList",
  initialState: {
    list: JSON.parse(localStorage.getItem("list"))
      ? JSON.parse(localStorage.getItem("list"))
      : [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("list", JSON.stringify(state.list));
    },
    changeStatus: (state, action) => {
      const index = state.list.findIndex((item) => item.id === action.payload);
      if (state.list[index].status === "done") {
        state.list[index].status = "not finished";
      } else {
        state.list[index].status = "done";
      }

      localStorage.setItem("list", JSON.stringify(state.list));
    },
    updateExpiredDate: (state, action) => {
      const index = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.list[index].expiredDate = action.payload.expiredDate;
      }
      localStorage.setItem("list", JSON.stringify(state.list));
    },
  },
});

const { reducer, actions } = todoListSlice;
export const { addTodo, changeStatus, updateExpiredDate } = actions;
export default reducer;
