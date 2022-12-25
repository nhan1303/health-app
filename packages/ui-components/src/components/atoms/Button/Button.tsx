import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

export interface IButtonProps extends MuiButtonProps {}

export const Button: React.FC<IButtonProps> = (props) => {
  return <MuiButton {...props} />;
};
