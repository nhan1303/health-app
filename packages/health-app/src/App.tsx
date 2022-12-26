import {
  ColumnPage,
  Layout,
  Loading,
  LoginPage,
  MyRecordPage,
  MyTopPage,
  NotFoundPage,
  ProtectedRoute,
} from "components";
import { selectError, selectLoading } from "modules/domains/common/selectors";

import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Alert,
  CssBaseline,
  Snackbar,
  ThemeProvider,
  useTheme,
} from "ui-components";

function App() {
  const theme = useTheme();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Loading isLoading={isLoading} />
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          key="top right"
          open={!!error}
          // autoHideDuration={1000}
        >
          <Alert sx={{ width: "100%" }} severity="error">
            {error}
          </Alert>
        </Snackbar>
        <React.Suspense fallback={<Loading isLoading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ColumnPage />} />
              <Route path="column" element={<ColumnPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />

              <Route
                path="top"
                element={
                  <ProtectedRoute>
                    <MyTopPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="my-record"
                element={
                  <ProtectedRoute>
                    <MyRecordPage />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </React.Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
