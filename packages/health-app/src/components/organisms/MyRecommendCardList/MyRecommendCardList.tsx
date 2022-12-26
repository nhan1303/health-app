import { SxProps, Theme } from "@mui/material";
import {
  IMyRecommendCardItemData,
  MyRecommendCardItem,
} from "components";
import React from "react";
import { Stack } from "ui-components";

export interface IMyRecommendCardListProps {
  data: IMyRecommendCardItemData[];
  sx?: SxProps<Theme>;
}

export const MyRecommendCardList: React.FC<IMyRecommendCardListProps> = ({
  data,
  sx,
}) => {
  const MyRecommendCardListSx = {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "48px",
  };
  return (
    <Stack sx={[MyRecommendCardListSx, ...(Array.isArray(sx) ? sx : [sx])]}>
      {data.map((item, index: number) => (
        <MyRecommendCardItem key={index} data={item} />
      ))}
    </Stack>
  );
};
