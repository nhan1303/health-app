import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IAuthUser } from "./types";

export interface AuthState {
  authUser?: IAuthUser;
  accessToken?: string;
}

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<IAuthUser | undefined>) => {
      state.authUser = action.payload;
    },
    setAuthToken: (state, action: PayloadAction<string | undefined>) => {
      state.accessToken = action.payload;
    },
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
