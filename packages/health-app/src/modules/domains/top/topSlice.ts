import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IPageInfo } from "modules/api/types";
import { IFood, IProgress } from "./types";

export interface IFoodFilters {
  page: number;
  limit: number;
}

export interface IFoodState {
  data?: IFood[];
  pageInfo: IPageInfo;
  filters: IFoodFilters;
}

export interface TopState {
  food: IFoodState;
  progress: IProgress;
  bodyFatPercentage?: unknown;
}

const initialState: TopState = {
  bodyFatPercentage: {},
  progress: {
    value: 0,
    description: "",
  },
  food: {
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

export const topSlice = createSlice({
  name: "top",
  initialState,
  reducers: {
    setBodyFatPercentage: (state, action: PayloadAction<unknown>) => {
      state.bodyFatPercentage = action.payload;
    },
    setFoodFilters: (state, action: PayloadAction<IFoodFilters>) => {
      state.food.filters = action.payload;
    },
    setFoodData: (state, action: PayloadAction<IFood[]>) => {
      state.food.data = [
        ...(Array.isArray(state.food.data) ? state.food.data : []),
        ...action.payload,
      ];
    },
    setFoodPageInfo: (state, action: PayloadAction<IPageInfo>) => {
      state.food.pageInfo = action.payload;
    },
    setProgressData: (state, action: PayloadAction<IProgress>) => {
      state.progress = action.payload;
    },
  },
});

export const { actions: topActions, reducer: topReducer } = topSlice;
