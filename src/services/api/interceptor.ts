import { RootState } from "../../store/root-state";

type RequestLoaderOptions = {
    ignore: boolean
}

let appStore: RootState;

export function setStore(store: RootState) {
    appStore = store
}

export const handleLoader = (loaderOptions?: RequestLoaderOptions, isIncrement: boolean = true) => {
    if (loaderOptions?.ignore) return;

    console.log('appStore', appStore)
    if (isIncrement) {
        // store.dispatch(incrementLoaderCount());
    } else {
        // store.dispatch(decrementLoaderCount());
    }
};
