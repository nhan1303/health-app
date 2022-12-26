import { AxiosError } from "axios";
import { commonActions } from "modules/domains/common/commonSlice";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import topApi from "../topApi";
import { topActions } from "modules/domains/top/topSlice";

export interface IuseGetBodyFatPercentageDataProps {}

export const useGetBodyFatPercentageData = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(commonActions.setLoading(true));
    const res = await topApi.getBodyFatPercentage();
    return res.data;
  };

  return useQuery(["body-fat-percentage"], fetchData, {
    onSettled: () => {
      dispatch(commonActions.setLoading(false));
    },
    onError(error: AxiosError) {
      dispatch(commonActions.setError(error.message));
    },
    onSuccess(res) {
      if (res) {
        dispatch(topActions.setBodyFatPercentage(res));
      }
    },
  });
};
