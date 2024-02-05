import {
  ActionReducerMapBuilder,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { GlobalState } from "../global-state";

export const globalInitThunk = createAsyncThunk(
  "global/globalInitThunk",
  async (): Promise<boolean> => {
    return Promise.resolve(true);
  }
);

export const globalInitThunkBuilder = (
  builder: ActionReducerMapBuilder<GlobalState>
) => {
  builder.addCase(
    globalInitThunk.fulfilled,
    (state, action: PayloadAction<boolean>) => {
      if (!action.payload) return;
      state.loaderCount = 1;
      state.error = "ERROR!";
    }
  );
};
