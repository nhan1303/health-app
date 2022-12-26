import React from "react";
import {
  Divider as MuiDivider,
  DividerProps as MuiDividerProps,
} from "@mui/material";

export interface IDividerProps extends MuiDividerProps {}

export const Divider: React.FC<IDividerProps> = (props) => {
  return <MuiDivider {...props} />;
};
