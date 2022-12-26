import React from "react";
import { Box, ImageListItem, Stack } from "ui-components";

export interface IColumnCardData {
  id: string;
  imgUrl: string;
  date: string;
  time: string;
  title: string;
  tags: string[];
}

export interface IColumnCardItemProps {
  data: IColumnCardData;
}

export const ColumnCardItem: React.FC<IColumnCardItemProps> = ({ data }) => {
  const ColumnCardItemSx = {
    width: "234px",
    height: "222px",
  };

  const ImageListItemSx = {
    position: "relative",
    width: "100%",
    height: "144px !important",
    marginBottom: "8px",
  };

  const TextWrapperSx = {
    width: "144px",
    height: "24px",
    padding: "0 8px",
    backgroundColor: "primary.main",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    position: "absolute",
    left: 0,
    bottom: "0px",
  };

  const TextSx = {
    color: "light.main",

    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "30px",
    letterSpacing: "0.15px",
  };

  const TitleSx = {
    width: "100%",
    height: "48px",

    fontFamily: "NotoSansJP",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "15px",
    lineHeight: "22px",
    letterSpacing: "0.075px",

    color: "primary.grey.500",

    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  const TagsSx = {
    width: "100%",
    height: "24px",
    fontFamily: "NotoSansJP",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "12px",
    lineHeight: "22px",
    /* or 183% */

    letterSpacing: "0.06px",

    color: "primary.400",
    flexDirection: "row",
    gap: "8px",
  };

  return (
    <Stack sx={ColumnCardItemSx}>
      <ImageListItem sx={ImageListItemSx}>
        <img src={data.imgUrl} alt={data.imgUrl} />
        <Stack sx={TextWrapperSx}>
          <Box sx={TextSx} component="span">
            {data.date}
          </Box>
          <Box sx={TextSx} component="span">
            {data.time}
          </Box>
        </Stack>
      </ImageListItem>

      <Box sx={TitleSx} component="span">
        {data.title}
      </Box>

      <Stack sx={TagsSx}>
        {data.tags.map((tag) => (
          <Box sx={TagsSx} component="span">
            #{tag}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
