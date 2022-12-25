import { Box as BoxMui, BoxProps as BoxPropsMui } from "@mui/material";
import React from "react";

export interface IBoxProps extends BoxPropsMui {}

export const Box: React.FC<IBoxProps> = (props) => {
  return <BoxMui {...props} />;
};
