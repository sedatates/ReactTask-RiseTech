import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategory = createAsyncThunk(
  'services/getCategory',
  async () => {
    const {data} = await axios.get(
      'https://api-test.boatmate.io/v2/api/mocks/2207/categories',
    );
    return data.categories;
  },
);

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
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

export const {addCategory} = categorySlice.actions;
export default categorySlice.reducer;
