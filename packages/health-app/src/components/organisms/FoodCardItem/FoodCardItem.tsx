import React from "react";
import { Box, ImageListItem, Stack } from "ui-components";

export interface IFoodCardItemData {
  imgUrl: string;
  text: string;
  id: string;
}

export interface IFoodCardItemProps {
  data: IFoodCardItemData;
}

export const FoodCardItem: React.FC<IFoodCardItemProps> = ({ data }) => {
  const FoodCardItemSx = {
    width: "234px",
    height: "234px",
  };

  const ImageListItemSx = {
    position: "relative",
    width: "100%",
    height: "100% !important",
  };

  const TextSx = {
    width: "120px",
    height: "32px",
    padding: "7px 10px 7px 8px",
    backgroundColor: "primary.300",
    color: "light.main",

    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "0.15px",

    position: "absolute",
    left: 0,
    bottom: "0px",
  };

  return (
    <Stack sx={FoodCardItemSx}>
      <ImageListItem sx={ImageListItemSx}>
        <img src={data.imgUrl} alt={data.imgUrl} />
        <Box sx={TextSx} component="span">
          {data.text}
        </Box>
      </ImageListItem>
    </Stack>
  );
};
