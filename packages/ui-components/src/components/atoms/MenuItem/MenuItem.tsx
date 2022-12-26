import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
} from "@mui/material";
import React from "react";

export interface IMenuItemProps extends MuiMenuItemProps {}

export const MenuItem: React.FC<IMenuItemProps> = (props) => {
  return <MuiMenuItem {...props} />;
};
