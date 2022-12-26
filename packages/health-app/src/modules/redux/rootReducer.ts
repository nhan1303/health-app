import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "modules/domains/auth/authSlice";
import { commonReducer } from "modules/domains/common/commonSlice";
import { topReducer } from "modules/domains/top/topSlice";

const rootReducer = combineReducers({
  common: commonReducer,
  auth: authReducer,
  top: topReducer,
});

export default rootReducer;
