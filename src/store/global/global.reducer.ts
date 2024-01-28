import { createSlice, Reducer } from "@reduxjs/toolkit";
import { GlobalState } from "./global-state";

const commonGlobalinitialState: GlobalState = {
  loaderCount: 0,
  error: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState: commonGlobalinitialState,
  reducers: {
    incrementLoaderCount: (state) => {
      state.loaderCount++;
    },
    decrementLoaderCount: (state) => {
      state.loaderCount--;
    },
    resetLoaderCount: (state) => {
      state.loaderCount = 0;
    },
    clearState: () => commonGlobalinitialState,
  },
});

export const globalInitialState = commonGlobalinitialState;
export const { incrementLoaderCount, decrementLoaderCount } =
  globalSlice.actions;

const globalReducer: Reducer<GlobalState> = globalSlice.reducer;
export default globalReducer;
