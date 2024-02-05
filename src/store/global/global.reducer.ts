import { createSlice, Reducer } from "@reduxjs/toolkit";
import { GlobalState } from "./global-state";
import { globalThunkActionsBuilder } from "./global.thunk-builder";

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
  extraReducers: globalThunkActionsBuilder,
});

export const commonGlobalInitialState = initialState;
export const { actions: globalCommonActions, reducer: globalReducer } =
  commonGlobalSlice;
export type GlobalSliceActionBase = typeof globalCommonActions;

const commonGlobalReducer: Reducer<GlobalState> = commonGlobalSlice.reducer;
export default commonGlobalReducer;
