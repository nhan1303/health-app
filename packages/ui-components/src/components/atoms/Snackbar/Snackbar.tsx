import { Snackbar as SnackbarMui, SnackbarProps } from "@mui/material";
import React from "react";

export interface ISnackbarProps extends SnackbarProps {}

export const Snackbar: React.FC<ISnackbarProps> = (props) => {
  return <SnackbarMui {...props} />;
};
