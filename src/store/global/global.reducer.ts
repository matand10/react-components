import { createSlice, Reducer } from "@reduxjs/toolkit";
import { GlobalState } from "./global-state";

const initialState: GlobalState = {
  loaderCount: 0,
  error: null,
};

export const commonGlobalSlice = createSlice({
  name: "global",
  initialState,
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
  },
});

export const commonGlobalInitialState = initialState;
export const { actions: globalCommonActions, reducer: globalReducer } = commonGlobalSlice;

const commonGlobalReducer: Reducer<GlobalState> = commonGlobalSlice.reducer;
export default commonGlobalReducer;
