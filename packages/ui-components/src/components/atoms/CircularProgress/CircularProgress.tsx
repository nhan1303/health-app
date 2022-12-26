import CircularProgressMui, {
  CircularProgressProps as CircularProgressPropsMui,
} from "@mui/material/CircularProgress";
import React from "react";
export interface ICircularProgressProps extends CircularProgressPropsMui {}

export const CircularProgress: React.FC<ICircularProgressProps> = (props) => {
  return <CircularProgressMui {...props} />;
};
