import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "modules/redux/store";
import { IAuthUser } from "./types";
const getAuthState = (state: RootState) => state.auth;

export const selectAuthUser = createSelector(
  [getAuthState],
  (authState): IAuthUser | undefined => authState?.authUser
);

export const selectAuthToken = createSelector(
  [getAuthState],
  (authState): string => authState?.accessToken || ""
);
