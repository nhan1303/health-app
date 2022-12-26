import { CustomTheme, theme } from "../themes";
import { CustomColor } from "../themes/healthApp/colors";
declare module "@mui/material" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
  interface PaletteOptions extends CustomColor {}
  interface PaletteColor extends CustomColor {}
  interface Palette extends CustomColor {}
}

export const useTheme = () => {
  return theme;
};
