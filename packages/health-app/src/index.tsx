import { queryClient } from "modules/react-query";
import { store } from "modules/redux/store";
import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClientProvider, QueryErrorResetBoundary } from "react-query";
import { Provider } from "react-redux";
import { Box, Button, Stack } from "ui-components";
import App from "./App";
import "./assets/styles/global.css";
import reportWebVitals from "./reportWebVitals";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start({ onUnhandledRequest: "bypass" });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryErrorResetBoundary>
      {({ reset }: any) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <Stack
              sx={{
                width: "100%",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box component="span">There was an error!</Box>
              <Button onClick={() => resetErrorBoundary()}>Try again</Button>
            </Stack>
          )}
        >
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </Provider>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
