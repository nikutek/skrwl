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
    removeExercise: (state) => {
      // to do sprawdzenia bo moze nie dzialac
      state.shift();
    },
  },
});

export const { addExercise, removeExercise } = trainingSlice.actions;

export const selectTraining = (state) => state.training;

export default trainingSlice.reducer;
