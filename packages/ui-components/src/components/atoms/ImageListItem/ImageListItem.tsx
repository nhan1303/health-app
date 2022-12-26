import {
  ImageListItem as MuiImageListItem,
  ImageListItemProps as MuiImageListItemProps,
} from "@mui/material";
import React from "react";

export interface IImageListItemProps extends MuiImageListItemProps {}

export const ImageListItem: React.FC<IImageListItemProps> = (props) => {
  return <MuiImageListItem {...props} />;
};
