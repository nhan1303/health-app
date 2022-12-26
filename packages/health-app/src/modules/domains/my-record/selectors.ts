import { createSelector } from "@reduxjs/toolkit";
import { IPageInfo } from "modules/api/types";
import { RootState } from "modules/redux/store";
import { IMyDiaryFilters } from "./myRecordSlice";
import { IMyDiary, IMyRecommend } from "./types";

const getRecordState = (state: RootState) => state.myRecord;

export const selectMyDiaryData = createSelector(
  [getRecordState],
  (myRecordState): IMyDiary[] | undefined => myRecordState.myDiary.data
);

export const selectMyDiaryPageInfo = createSelector(
  [getRecordState],
  (myRecordState): IPageInfo => myRecordState.myDiary.pageInfo
);

export const selectMyDiaryFilters = createSelector(
  [getRecordState],
  (myRecordState): IMyDiaryFilters => myRecordState.myDiary.filters
);

export const selectMyRecommendData = createSelector(
  [getRecordState],
  (myRecordState): IMyRecommend[] | undefined => myRecordState.myRecommend.data
);
