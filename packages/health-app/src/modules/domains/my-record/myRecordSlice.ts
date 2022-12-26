import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IPageInfo } from "modules/api/types";
import { IMyDiary, IMyRecommend } from "./types";

export interface IMyDiaryFilters {
  page: number;
  limit: number;
}

export interface IMyDiaryState {
  data?: IMyDiary[];
  pageInfo: IPageInfo;
  filters: IMyDiaryFilters;
}

export interface IMyRecommendState {
  data?: IMyRecommend[];
}

export interface MyRecordState {
  myDiary: IMyDiaryState;
  myRecommend: IMyRecommendState;
}

const initialState: MyRecordState = {
  myRecommend: {},
  myDiary: {
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

export const myRecordSlice = createSlice({
  name: "myRecord",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<IMyDiaryFilters>) => {
      state.myDiary.filters = action.payload;
    },
    setData: (state, action: PayloadAction<IMyDiary[]>) => {
      state.myDiary.data = [
        ...(Array.isArray(state.myDiary.data) ? state.myDiary.data : []),
        ...action.payload,
      ];
    },
    setPageInfo: (state, action: PayloadAction<IPageInfo>) => {
      state.myDiary.pageInfo = action.payload;
    },
    setMyRecommendData: (state, action: PayloadAction<IMyRecommend[]>) => {
      state.myRecommend.data = action.payload;
    },
  },
});

export const { actions: myRecordActions, reducer: myRecordReducer } =
  myRecordSlice;
