import { AxiosError } from "axios";
import { commonActions } from "modules/domains/common/commonSlice";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import myRecordApi from "../myRecordApi";
import { myRecordActions } from "../myRecordSlice";
import { IMyDiaryParams } from "../types";

export interface IuseGetMyDiaryProps {}

export const useGetMyDiary = (params: IMyDiaryParams) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(commonActions.setLoading(true));

    const res = await myRecordApi.getMyDiary(params);
    return res.data;
  };

  return useQuery(["my-diaries", params], fetchData, {
    onSettled: () => {
      dispatch(commonActions.setLoading(false));
    },
    onError(error: AxiosError) {
      dispatch(commonActions.setError(error.message));
    },
    onSuccess(res) {
      if (res?.data) {
        dispatch(myRecordActions.setData(res.data));
        dispatch(myRecordActions.setPageInfo(res.pageInfo));
      }
    },
    refetchOnWindowFocus: false,
  });
};
