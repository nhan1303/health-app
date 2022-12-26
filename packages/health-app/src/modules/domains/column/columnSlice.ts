import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IPageInfo } from "modules/api/types";
import { IColumn } from "./types";

export interface IColumnFilters {
  page: number;
  limit: number;
}

export interface IColumnState {
  data?: IColumn[];
  pageInfo: IPageInfo;
  filters: IColumnFilters;
}

export interface ColumnState {
  columns: IColumnState;
}

const initialState: ColumnState = {
  columns: {
    pageInfo: {
      currentPage: 1,
      nextPage: null,
      limit: 8,
      totalCount: 0,
    },
    filters: {
      page: 1,
      limit: 8,
    },
  },
};

export const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<IColumnFilters>) => {
      state.columns.filters = action.payload;
    },
    setData: (state, action: PayloadAction<IColumn[]>) => {
      state.columns.data = [
        ...(Array.isArray(state.columns.data) ? state.columns.data : []),
        ...action.payload,
      ];
    },
    setPageInfo: (state, action: PayloadAction<IPageInfo>) => {
      state.columns.pageInfo = action.payload;
    },
  },
});

export const { actions: columnActions, reducer: columnReducer } = columnSlice;
