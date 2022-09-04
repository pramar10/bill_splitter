import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./member";
import groupReducer from "./group";
import userReducer from "./user";
export const store = configureStore({
  reducer: {
    member: memberReducer,
    group: groupReducer,
    user: userReducer,
  },
});
