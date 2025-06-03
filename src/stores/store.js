import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import stateSlice from "./slices/StateSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    state: stateSlice,
  },
});
