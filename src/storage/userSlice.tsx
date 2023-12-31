import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = { token: null, userName: null, userEmail: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.token = action.payload.token;
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    setUserLogOutState: (state) => {
      state.token = null;
      state.userName = null;
      state.userEmail = null;
    },
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;
export const selectUserToken = (state) => state.user.token;
export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;
export default userSlice.reducer;
