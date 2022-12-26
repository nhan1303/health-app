import axiosClient from "modules/api/axiosClient";
import { APIResponse, IListResponse } from "modules/api/types";
import {
  IMyDiary,
  IMyDiaryParams,
  IMyRecommend,
  IMyRecommendParams,
} from "./types";

class MyRecordApi {
  getMyRecommend(params: IMyRecommendParams) {
    const url = "/my-recommend";
    return axiosClient.get<IMyRecommendParams, APIResponse<IMyRecommend[]>>(
      url,
      {
        params,
      }
    );
  }
  getMyDiary(params: IMyDiaryParams) {
    const url = "/my-diary";
    return axiosClient.get<
      IMyDiaryParams,
      APIResponse<IListResponse<IMyDiary>>
    >(url, {
      params,
    });
  }
}

const myRecordApi = new MyRecordApi();

export default myRecordApi;
