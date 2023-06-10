import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PendingExercise {
  name: string;
}

const trainingSlice = createSlice({
  name: "training",
  initialState: [] as PendingExercise[],
  reducers: {
    addExercise: (state, action: PayloadAction<PendingExercise>) => {
      state.push(action.payload);
    },
    removeExercise: (state, action) => {
      // to do sprawdzenia bo moze nie dzialac
      state.filter((item) => {
        return item !== action.payload;
      });
      console.log(state);
    },
  },
});

export const { addExercise, removeExercise } = trainingSlice.actions;

export const selectTraining = (state) => state;

export default trainingSlice.reducer;
