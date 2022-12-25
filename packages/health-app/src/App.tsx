import { Box, CssBaseline, ThemeProvider, useTheme } from "ui-components";

function App() {
  const theme = useTheme();

  const ContainerSx = {
    width: "100%",
    height: "100vh",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={ContainerSx}>Health app</Box>
    </ThemeProvider>
  );
}

export default App;
