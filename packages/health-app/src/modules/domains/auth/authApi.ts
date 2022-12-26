import axiosClient from "modules/api/axiosClient";
import { APIResponse } from "modules/api/types";
import {
  ILoginParams,
  ILoginResponse,
  ILogoutParams,
  ILogoutResponse,
} from "./types";

class AuthApi {
  login(params: ILoginParams) {
    const url = "/login";
    return axiosClient.post<ILoginParams, APIResponse<ILoginResponse>>(
      url,
      params
    );
  }

  logout(params: ILogoutParams) {
    const url = "/logout";
    return axiosClient.post<ILogoutParams, APIResponse<ILogoutResponse>>(
      url,
      params
    );
  }
}

const authApi = new AuthApi();

export default authApi;
