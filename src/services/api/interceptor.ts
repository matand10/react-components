import { AppStore } from "../../store";
import { GlobalSliceActionBase, globalCommonActions } from "../../store/global/global.reducer";

type RequestLoaderOptions = {
  ignore: boolean;
};

let _appStore: AppStore;
let _globalAction: GlobalSliceActionBase;

export function injectStore(store: AppStore) {
  _appStore = store;
}

export function injectGlobalActions(globalActions: GlobalSliceActionBase) {
  _globalAction = globalActions;
}

export const handleLoader = (
  loaderOptions?: RequestLoaderOptions,
  isIncrement: boolean = true
) => {
  if (loaderOptions?.ignore) return;

  if (isIncrement) {
    _appStore.dispatch(globalCommonActions.decrementLoaderCount());
  } else {
    _appStore.dispatch(globalCommonActions.incrementLoaderCount());
  }
};
