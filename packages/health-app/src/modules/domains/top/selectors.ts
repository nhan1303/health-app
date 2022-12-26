import { createSelector } from "@reduxjs/toolkit";
import { IPageInfo } from "modules/api/types";
import { RootState } from "modules/redux/store";
import { IFoodFilters } from "./topSlice";
import { IFood, IProgress } from "./types";

const getTopState = (state: RootState) => state.top;

export const selectFoodData = createSelector(
  [getTopState],
  (topState): IFood[] | undefined => topState.food.data
);

export const selectFoodPageInfo = createSelector(
  [getTopState],
  (topState): IPageInfo => topState.food.pageInfo
);

export const selectFoodFilters = createSelector(
  [getTopState],
  (topState): IFoodFilters => topState.food.filters
);

export const selectProgress = createSelector(
  [getTopState],
  (topState): IProgress => topState.progress
);

export const selectBodyFatPercentage = createSelector(
  [getTopState],
  (topState): unknown => topState.bodyFatPercentage
);
