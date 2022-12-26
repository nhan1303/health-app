import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "modules/domains/auth/authSlice";
import { commonReducer } from "modules/domains/common/commonSlice";

const rootReducer = combineReducers({
  common: commonReducer,
  auth: authReducer,
});

export default rootReducer;
