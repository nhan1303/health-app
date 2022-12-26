import React from "react";
import {
  Popover as MuiPopover,
  PopoverProps as MuiPopoverProps,
} from "@mui/material";

export interface IPopoverProps extends MuiPopoverProps {}

export const Popover: React.FC<IPopoverProps> = (props) => {
  return <MuiPopover {...props} />;
};
