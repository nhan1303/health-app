import axiosClient from "modules/api/axiosClient";
import { APIResponse, IListResponse } from "modules/api/types";
import { IFoodParams, IFood, IProgress } from "./types";

class TopApi {
  getBodyFatPercentage() {
    const url = "/body-fat-percentage";
    return axiosClient.get<unknown, APIResponse<unknown>>(url);
  }

  getProgress() {
    const url = "/progress";
    return axiosClient.get<unknown, APIResponse<IProgress>>(url);
  }

  getFood(params: IFoodParams) {
    const url = "/foods";
    return axiosClient.get<IFoodParams, APIResponse<IListResponse<IFood>>>(
      url,
      {
        params,
      }
    );
  }
}

const topApi = new TopApi();

export default topApi;
