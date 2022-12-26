
import React from "react";
import { Box, Stack } from "ui-components";

export interface IMyDiaryCardItemData {
  date: string;
  time: string;
  description: string;
}
export interface IMyDiaryCardItemProps {
  data: IMyDiaryCardItemData;
}

export const MyDiaryCardItem: React.FC<IMyDiaryCardItemProps> = ({ data }) => {
  const MyDiaryCardItemSx = {
    width: "231px",
    height: "231px",

    padding: "16px 15px 27px 16px",
    backgroundColor: "light.main",
    border: "2px solid #707070",
  };

  const TextSx = {
    fontStyle: "normal",
    color: "gray.500",
  };

  const DateTimeSx = {
    ...TextSx,

    width: "147px",
    height: "48px",

    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "22px",
    letterSpacing: "0.09px",
  };

  const DescriptionSx = {
    ...TextSx,

    width: "200px",
    height: "132px",

    fontFamily: "NotoSansJP",
    fontWeight: "300",
    fontSize: "12px",
    lineHeight: "17px",
    letterSpacing: "0.06px",
  };
  return (
    <Stack sx={MyDiaryCardItemSx} flexDirection="column">
      <Stack sx={DateTimeSx} flexDirection="column">
        <Box component="span">{data.date}</Box>
        <Box component="span">{data.time}</Box>
      </Stack>

      <Box sx={DescriptionSx} component="span">
        {data.description}
      </Box>
    </Stack>
  );
};
