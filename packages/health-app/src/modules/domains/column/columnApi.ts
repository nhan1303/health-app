import axiosClient from "modules/api/axiosClient";
import { APIResponse, IListResponse } from "modules/api/types";
import { IColumnParams, IColumnResponse } from "./types";

class ColumnApi {
  getColumns(params: IColumnParams) {
    const url = "/columns";
    return axiosClient.get<
      IColumnParams,
      APIResponse<IListResponse<IColumnResponse>>
    >(url, {
      params,
    });
  }
}

const columnApi = new ColumnApi();

export default columnApi;
