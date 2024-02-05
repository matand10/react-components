import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { GlobalState } from "./global-state";
import { globalInitThunkBuilder, globalInitThunk } from "./thunks/globalThunk";

export const globalThunkActionsBuilder = (
  builder: ActionReducerMapBuilder<GlobalState>
) => {
  globalInitThunkBuilder(builder);
};

export const globalThunkActions = {
  globalInitThunk,
};
