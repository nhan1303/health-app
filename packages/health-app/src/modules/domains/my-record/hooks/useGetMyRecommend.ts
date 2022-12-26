import { AxiosError } from "axios";
import { commonActions } from "modules/domains/common/commonSlice";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import myRecordApi from "../myRecordApi";
import { myRecordActions } from "modules/domains/my-record/myRecordSlice";

export interface IuseGetMyRecommendProps {}

export const useGetMyRecommend = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(commonActions.setLoading(true));
    const res = await myRecordApi.getMyRecommend({});
    return res.data;
  };

  return useQuery(["my-recommend"], fetchData, {
    onSettled: () => {
      dispatch(commonActions.setLoading(false));
    },
    onError(error: AxiosError) {
      dispatch(commonActions.setError(error.message));
    },
    onSuccess(res) {
      if (res) {
        dispatch(myRecordActions.setMyRecommendData(res));
      }
    },
    refetchOnWindowFocus: false,
  });
};
