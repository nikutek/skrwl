import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import trainingSlice from "./trainingSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    training: trainingSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
