import { useTheme as useThemeMui } from "@mui/material";
import { CustomTheme } from "../themes";

export const useTheme = () => {
  return useThemeMui<CustomTheme>();
};
