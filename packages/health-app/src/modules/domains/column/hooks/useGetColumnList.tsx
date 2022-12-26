import { AxiosError } from "axios";
import { commonActions } from "modules/domains/common/commonSlice";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import columnApi from "../columnApi";
import { columnActions } from "../columnSlice";
import { IColumnParams } from "../types";

export interface IuseGetColumnListProps {}

export const useGetColumnList = (params: IColumnParams) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(commonActions.setLoading(true));
    const res = await columnApi.getColumns(params);
    return res.data;
  };

  return useQuery(["columns", params], fetchData, {
    onSettled: () => {
      dispatch(commonActions.setLoading(false));
    },
    onError(error: AxiosError) {
      dispatch(commonActions.setError(error.message));
    },
    onSuccess(res) {
      if (res?.data) {
        dispatch(columnActions.setData(res.data));
        dispatch(columnActions.setPageInfo(res.pageInfo));
      }
    },
  });
};
