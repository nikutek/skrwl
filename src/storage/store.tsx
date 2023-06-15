import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import trainingSlice from "./trainingSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    training: trainingSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
