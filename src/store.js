import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import  loggedUserSlice  from "./slices/loggedUserSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loggedUser: loggedUserSlice,
  },
});
