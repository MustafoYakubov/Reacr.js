import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/UserSlice";
export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
