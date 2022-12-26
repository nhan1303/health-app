import { createTheme } from "@mui/material";
import { colors, CustomColor } from "./colors";

// A custom theme for health-app
const themeOptions = {
  palette: {
    ...colors,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  ...colors,
} as const;

export type CustomTheme = {
  [Key in keyof typeof themeOptions]: typeof themeOptions[Key];
};

declare module "@mui/material" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
  interface PaletteOptions extends CustomColor {}
  interface PaletteColor extends CustomColor {}
  interface Palette extends CustomColor {}
}

export const theme = createTheme(themeOptions);
