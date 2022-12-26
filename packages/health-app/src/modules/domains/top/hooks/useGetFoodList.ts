import { AxiosError } from "axios";
import { commonActions } from "modules/domains/common/commonSlice";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import topApi from "../topApi";
import { IFoodParams } from "../types";
import { topActions } from "modules/domains/top/topSlice";

export interface IuseGetFoodListProps {}

export const useGetFoodList = (params: IFoodParams) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(commonActions.setLoading(true));
    const res = await topApi.getFood(params);
    return res.data;
  };

  return useQuery(["foods", params], fetchData, {
    onSettled: () => {
      dispatch(commonActions.setLoading(false));
    },
    onError(error: AxiosError) {
      dispatch(commonActions.setError(error.message));
    },
    onSuccess(res) {
      if (res?.data) {
        dispatch(topActions.setFoodData(res.data));
        dispatch(topActions.setFoodPageInfo(res.pageInfo));
      }
    },
    refetchOnWindowFocus: false,
  });
};
