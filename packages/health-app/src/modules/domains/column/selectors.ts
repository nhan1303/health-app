import { createSelector } from "@reduxjs/toolkit";
import { IPageInfo } from "modules/api/types";
import { RootState } from "modules/redux/store";
import { IColumnFilters } from "./columnSlice";
import { IColumn } from "./types";

const getColumnState = (state: RootState) => state.column;

export const selectColumnData = createSelector(
  [getColumnState],
  (columnState): IColumn[] | undefined => columnState.columns.data
);

export const selectColumnPageInfo = createSelector(
  [getColumnState],
  (columnState): IPageInfo => columnState.columns.pageInfo
);

export const selectColumnFilters = createSelector(
  [getColumnState],
  (columnState): IColumnFilters => columnState.columns.filters
);
