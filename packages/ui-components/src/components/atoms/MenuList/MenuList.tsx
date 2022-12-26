import { MenuList as MenuListMui, MenuListProps } from "@mui/material";
import React from "react";

export interface IMenuListProps extends MenuListProps {}

export const MenuList: React.FC<IMenuListProps> = (props) => {
  return <MenuListMui {...props} />;
};
