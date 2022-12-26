import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "modules/redux/store";

const getCommonState = (state: RootState) => state.common;

export const selectLoading = createSelector(
  [getCommonState],
  (commonState): boolean => commonState.loading
);

export const selectError = createSelector(
  [getCommonState],
  (commonState): string | undefined => commonState?.error
);
