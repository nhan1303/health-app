import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

import logger from "redux-logger";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...(process.env.NODE_ENV !== "production" ? [logger] : []),
  ] as const,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
