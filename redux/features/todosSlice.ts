import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategory = createAsyncThunk(
  "services/getCategory",
  async () => {
    const { data } = await axios.get(
      "https://api-test.boatmate.io/v2/api/mocks/2207/categories"
    );
    return data.categories;
  }
);

type SliceState = {
  items: Array<{
    jobId: number;
    jobName: string;
    jobUrgency: string;
  }>;
  isLoading: boolean;
  error: string | null;
};

const todosSlice = createSlice({
  name: "todos",

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  } as SliceState,

  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(
        (item) => item.jobId !== action.payload.jobId
      );
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    editTodo: (state, action) => {
      state.items.forEach((item) => {
        if (item.jobId === action.payload.jobId) {
          item.jobName = action.payload.jobName;
          item.jobUrgency = action.payload.jobUrgency;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    persistLocal: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, persistLocal } =
  todosSlice.actions;
export default todosSlice.reducer;
