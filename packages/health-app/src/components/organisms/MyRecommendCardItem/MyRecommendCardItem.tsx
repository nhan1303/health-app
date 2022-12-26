import React from "react";
import { Box, ImageListItem, Stack } from "ui-components";

export interface IMyRecommendCardItemData {
  id: string;
  title: string;
  subTitle: string;
  imgUrl: string;
}

export interface IMyRecommendCardItemProps {
  data: IMyRecommendCardItemData;
}

export const MyRecommendCardItem: React.FC<IMyRecommendCardItemProps> = ({
  data,
}) => {
  const MyRecommendCardItemSx = {
    width: "288px",
    height: "288px",
    position: "relative",
    borderWidth: "24px",
    borderStyle: "solid",
    borderColor: "primary.main",
  };

  const TitleSx = {
    width: "100%",
    height: "30px",

    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "25px",
    lineHeight: "30px",

    textAlign: "center",
    letterSpacing: "0.125px",

    color: "primary.main",
    marginBottom: "10px",
  };
  const SubTitleSx = {
    width: "160px",
    height: "24px",
    color: "light.main",
    fontFamily: "NotoSansJP",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "14px",
    lineHeight: "20px",

    textAlign: "center",
    backgroundColor: "primary.400",
  };

  const ImageListItemSx = {
    width: "100%",
    height: "100% !important",
    mixBlendMode: "luminosity",
    opacity: "0.25",
  };

  const ImageListItemWrapperSx = {
    backgroundColor: "#000000",
    mixBlendMode: "luminosity",

    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  const TextWrapperSx = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Stack sx={MyRecommendCardItemSx}>
      <Stack sx={ImageListItemWrapperSx}>
        <ImageListItem sx={ImageListItemSx}>
          <img src={data.imgUrl} alt={data.imgUrl} />
        </ImageListItem>
      </Stack>

      <Stack sx={TextWrapperSx}>
        <Box sx={TitleSx} component="span">
          {data.title}
        </Box>
        <Box sx={SubTitleSx} component="span">
          {data.subTitle}
        </Box>
      </Stack>
    </Stack>
  );
};
