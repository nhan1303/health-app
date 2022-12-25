import {
  CssBaseline as CssBaselineMui,
  CssBaselineProps as CssBaselinePropsMui,
} from "@mui/material";

import React from "react";

export interface ICssBaselineProps extends CssBaselinePropsMui {}

export const CssBaseline: React.FC<ICssBaselineProps> = (props) => {
  return <CssBaselineMui {...props} />;
};
