const isLoading = (state: RootState): boolean => state.global.loaderCount > 0;

export const commonGlobalSelectors = {
  isLoading,
};
