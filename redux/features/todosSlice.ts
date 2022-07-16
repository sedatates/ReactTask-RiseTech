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

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      console.log(action.payload);
      state.items = state.items.filter(
        (item) => item.jobId !== action.payload.jobId
      );
    },

    editTodo: (state, action) => {
      console.log(action.payload);
      state.items.forEach((item) => {
        if (item.jobId === action.payload.jobId) {
          item.jobName = action.payload.jobName;
          item.jobUrgency = action.payload.jobUrgency;
        }
      });
    },
  },

  extraReducers: {
    // get services
    [getCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [getCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
