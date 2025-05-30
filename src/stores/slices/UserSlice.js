import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: null,
    error: false,
  },
  reducer: {
    processing: (state, action) => {
      state.loading = true;
      state.data = null;
    },
    finish: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    wrong: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { processing, finish, wrong } = userSlice.actions;
export default userSlice.reducer;
