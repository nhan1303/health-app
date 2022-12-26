import { AxiosError } from "axios";
import { authActions } from "modules/domains/auth/authSlice";
import { ILoginParams, ILoginResponse } from "modules/domains/auth/types";
import { commonActions } from "modules/domains/common/commonSlice";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";

import { APIResponse } from "modules/api/types";
import { queryClient } from "modules/react-query";
import authApi from "../authApi";
import { useNavigate } from "react-router-dom";

export interface IuseLoginProps {
  params: ILoginParams;
}

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (params: ILoginParams) => {
    const res = await authApi.login(params);
    return res;
  };

  return useMutation(handleLogin, {
    onMutate: () => {
      dispatch(commonActions.setLoading(true));
    },
    onSettled: () => {
      dispatch(commonActions.setLoading(false));
    },
    onError(error: AxiosError) {
      dispatch(commonActions.setError(error.message));
    },

    onSuccess(res: APIResponse<ILoginResponse>) {
      if (res.data) {
        dispatch(authActions.setAuthUser({ username: res.data.username }));
        dispatch(authActions.setAuthToken(res.data.token));
      }

      navigate("/top");
      queryClient.invalidateQueries();
    },
  });
};
