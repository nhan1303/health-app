import { SxProps, Theme } from "@mui/material";

import React from "react";
import { Box, Divider, Stack } from "ui-components";

export interface IRecommendCardData {
  title: string;
  subTitle: string;
}

export interface IRecommendCardProps {
  data: IRecommendCardData;
  sx?: SxProps<Theme>;
}

export const RecommendCard: React.FC<IRecommendCardProps> = ({ data, sx }) => {
  const RecommendCardSx = {
    width: "216px",
    height: "144px",
    backgroundColor: "dark.600",
    color: "light.main",

    alignItems: "center",
    justifyContent: "center",
  };

  const TitleSx = {
    color: "primary.main",

    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "22px",
    lineHeight: "27px",

    textAlign: "center",
    letterSpacing: "0.11px",
  };

  const DividerSx = {
    width: "56px",
    marginTop: "10px",
    marginBottom: "8px",
    backgroundColor: "light.main",
  };
  const SubTitleSx = {
    fontFamily: "Hiragino Kaku Gothic Pro",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "26px",

    textAlign: "center",
  };
  return (
    <Stack sx={[RecommendCardSx, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Box sx={TitleSx} component="span">
        {data.title}
      </Box>
      <Divider sx={DividerSx} light />
      <Box sx={SubTitleSx} component="span">
        {data.subTitle}
      </Box>
    </Stack>
  );
};
