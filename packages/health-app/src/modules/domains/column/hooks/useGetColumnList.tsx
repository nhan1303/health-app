import { AxiosError } from "axios";
import { commonActions } from "modules/domains/common/commonSlice";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import columnApi from "../columnApi";
import { columnActions } from "../columnSlice";
import { transformList } from "../transformers/columnTransformer";
import { IColumn, IColumnParams, IColumnResponse } from "../types";

export interface IuseGetColumnListProps {}

export const useGetColumnList = (params: IColumnParams) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(commonActions.setLoading(true));
    const res = await columnApi.getColumns(params);
    return res.data;
  };

  return useQuery(["columns", params], fetchData, {
    // select(data: IColumnResponse[]): IColumn[] {
    //   // transforms data while getting from react-query cached
    //   return transformList(data);
    // },
    onSettled: () => {
      dispatch(commonActions.setLoading(false));
    },
    onError(error: AxiosError) {
      dispatch(commonActions.setError(error.message));
    },
    onSuccess(res) {
      if (res && Array.isArray(res.data)) {
        const responseData: IColumnResponse[] = res.data;
        const formattedData: IColumn[] = transformList(responseData);

        dispatch(columnActions.setData(formattedData));
        dispatch(columnActions.setPageInfo(res.pageInfo));
      }
    },
    refetchOnWindowFocus: false,
  });
};
