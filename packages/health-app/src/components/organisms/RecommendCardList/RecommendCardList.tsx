import { SxProps, Theme } from "@mui/material";
import { IRecommendCardData, RecommendCard } from "components";
import React from "react";
import { Stack } from "ui-components";

export interface IRecommendCardListProps {
  data: IRecommendCardData[];
  sx?: SxProps<Theme>;
}

export const RecommendCardList: React.FC<IRecommendCardListProps> = ({
  data,
  sx,
}) => {
  const RecommendCardListSx = {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "32px",
  };
  return (
    <Stack sx={[RecommendCardListSx, ...(Array.isArray(sx) ? sx : [sx])]}>
      {data.map((item, index: number) => (
        <RecommendCard key={index} data={item} />
      ))}
    </Stack>
  );
};
