import { ThemeProvider as ThemeProviderMui } from "@mui/material/styles";
import { ThemeProviderProps as ThemeProviderPropsMui } from "@mui/material/styles/ThemeProvider";

import React from "react";

export interface IThemeProviderProps extends ThemeProviderPropsMui {}

export const ThemeProvider: React.FC<IThemeProviderProps> = (props) => {
  return <ThemeProviderMui {...props} />;
};
