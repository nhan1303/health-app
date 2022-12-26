import { Alert as AlertMui, AlertProps } from "@mui/material";
import React from "react";

export interface IAlertProps extends AlertProps {}

export const Alert: React.FC<IAlertProps> = (props) => {
  return <AlertMui {...props} />;
};
