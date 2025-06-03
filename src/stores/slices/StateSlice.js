import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: null,
  error: false,
};

const stateSlice = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    processing: (state, action) => {
      state.loading = true;
      state.data = null;
    },
    ready: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    wrong: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = true;
    },
  },
});

export const { processing, ready, wrong } = stateSlice.actions;
export default stateSlice.reducer;
