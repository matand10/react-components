import { commonGlobalSlice } from "./global.reducer";
import { globalThunkActions as globalThunkActions } from "./global.thunk-builder";

export const globalCommonActions = {
  ...globalThunkActions,
  ...commonGlobalSlice.actions,
};
