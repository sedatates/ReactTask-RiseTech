import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getServices = createAsyncThunk(
  "services/getServices",
  async () => {
    console.log("getServices");
    const { data } = await axios.get(
      "https://api-test.boatmate.io/v2/api/mocks/2207/services"
    );
    return data.services;
  }
);

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    items: Array<any>(),
    isLoading: false,
    error: null as any,
  },
  reducers: {
    addService: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getServices.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(getServices.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});

export const { addService } = serviceSlice.actions;
export default serviceSlice.reducer;
